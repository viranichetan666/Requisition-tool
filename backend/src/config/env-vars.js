const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 80,
  mongo: {
    uri: process.env.MONGO_URI,
    options: {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  corsOptions: {
    origin: (origin, callback) => {
      if (process.env.AUTHORIZED.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback("Domain not allowed by CORS", false);
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: [
      "Accept",
      "Content-Type",
      "Authorization",
      "Origin",
      "From",
      "x-auth-token",
    ],
  },
};
