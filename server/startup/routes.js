const example = require('../routes/example');

module.exports = function (app) {
    app.use('/api/example', example);
};
