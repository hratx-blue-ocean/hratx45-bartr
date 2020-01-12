const example = require('../routes/testing');

module.exports = function (app) {
  app.use('/api/testing', example);
};
