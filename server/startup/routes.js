const testing = require("../routes/testing");
const products = require("../routes/products");
const users = require("../routes/users");
const messages = require("../routes/messages");
const offers = require('../routes/offers');
// const productsNew = require("../routes/productsNew");

module.exports = function(app) {
  app.use("/api/testing", testing);
  app.use("/api/products", products);
  app.use("/api/users", users);
  app.use("/api/messages", messages);
  app.use('/api/offers', offers);
  // app.use("/api/productsNew", productsNew);
};
