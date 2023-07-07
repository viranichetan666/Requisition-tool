const { env } = require('../config/env-vars');
const HttpException = require('../utils/HttpException');

/**
 * Error Handler Sends Stack Trace only during Development Environment
 *
 * @public
 *
 * @param {Error} err
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const ErrorHandler = (err, req, res, next) => {
  const response = {
    code: err.status || 500,
    message: err.message,
    errors: err.errors,
    stack: err.stack,
  };
  if (env === 'production') delete response.stack;
  res.status(response.code).json(response);
  res.end();
};

exports.ErrorHandler = ErrorHandler;

/**
 * Convert Error Thrown By Joi OR not an Instance of HttpException
 *
 * @public
 *
 * @param {Error} err
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 *
 * @returns {ErrorHandler} - forward converted error to error handler
 */
exports.ConvertError = (err, req, res, next) => {
  let convertedError = err;
 if (!(err instanceof HttpException)) {
    convertedError = new HttpException({
      message: err.message || 'Internal server error',
      status: err.status || 500,
      stack: err.stack,
    });
  }
  return ErrorHandler(convertedError, req, res, next);
};

/**
 * Catch 404 and forward to error handler
 *
 * @public
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 *
 * @returns {ErrorHandler} - forward error to error handler
 */
exports.NotFound = (req, res, next) => {
  const err = new HttpException({
    message: 'Resource you are looking for Not Found',
    status: 404,
  });
  return ErrorHandler(err, req, res, next);
};

/**
 * Catch 429 Rate limit exceeds
 *
 * @public
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 *
 * @returns {ErrorHandler} - forward error to error handler
 */
exports.RateLimitHandler = (req, res, next) => {
  const err = new HttpException({
    message: 'Too many requests, please try again later after 1 hour.',
    status: 429,
  });
  return ErrorHandler(err, req, res, next);
};
