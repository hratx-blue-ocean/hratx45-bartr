const example = require("../routes/testing");
const products = require("../routes/products");
// const categories = require('../')

module.exports = function(app) {
  app.use("/api/testing", example);
  app.use("/api/products", products);
};
