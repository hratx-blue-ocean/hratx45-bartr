const example = require('../routes/testing');
// const categories = require('../')

module.exports = function (app) {
  app.use('/api/testing', example);
};
