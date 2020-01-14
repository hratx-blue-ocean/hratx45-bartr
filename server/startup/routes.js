const testing = require("../routes/testing");
const products = require("../routes/products");
const users = require("../routes/users");
// const categories = require('../')

module.exports = function(app) {
  app.use("/api/testing", testing);
  app.use("/api/products", products);
  app.use("/api/users", users);
};
