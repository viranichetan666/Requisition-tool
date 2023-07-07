const mongoose = require('mongoose');
const Logger = require('./logger');
const { env, mongo: { options, uri } } = require('./env-vars');
const logger = new Logger('db.js');

// Global mongoose settings
mongoose.Promise = global.Promise;
mongoose.set('debug', env === 'development');

// Catches mongoDB connection error
mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB Connection Error ${err}`);
  process.exit(1);
});

// Logs when connection established
mongoose.connection.on('connected', () => {
  logger.log('Connected To DB');
});

/**
 * Connect to mongo db
 *
 * @public
 * @returns {object} Mongoose connection
 */
exports.Connect = async () => {
  await mongoose.connect(uri, options);
 // return mongoose.connection;
};
