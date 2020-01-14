const path = require('path');
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');


const app = express();

const Sentry = require('@sentry/node');
// ERROR HANDLING - DONT MOVE - The request handler must be the first middleware on the app
Sentry.init({ dsn: 'https://c8bfac32f40744a8a921697b3ce4a2b7@sentry.io/1878926' });
app.use(Sentry.Handlers.requestHandler());

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


require("./startup/routes")(app);


// --------------------------------------------------------------------------------------------------

// Public routing
app.use('/', express.static(path.join(__dirname, '/public/')));




// --------------------------------------------------------------------------------------------------

// ERROR HANDLING - DONT MOVE - The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  console.log('\n\nsentry error');
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});


module.exports = app;
