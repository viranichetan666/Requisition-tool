var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const { Connect } = require('./src/config/db');
const { ErrorHandler, ConvertError } = require('./src/middleware/errors');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Enable CORS - Cross Origin Resource Sharing
 *
 * @see https://www.npmjs.com/package/cors
 */
app.use(cors());


/**
 * @description Mount api routes
 */
app.use('/api/', require('./src/api/routes'));

/**
 * @description Convert error and forward ro ErrorHandlet
 */
app.use(ConvertError);


/**
 * @description Catch all errors and sends stacktrace in development
 */
app.use(ErrorHandler);

const connectWithRetry = async () => {
  try {
    await Connect();
    console.log('Connection Established');
  } catch (error) {
    logger.error('Database Connection Error Will retry connection after 5 seconds');
    setTimeout(connectWithRetry, 5000);
  }
};

connectWithRetry();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
