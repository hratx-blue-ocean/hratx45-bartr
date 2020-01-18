const express = require("express");
const router = express.Router();
const db = require("../db/tables/offers.js");
const productDb = require("../db/tables/products.js");
const userDb = require("../db/tables/users");

router.use(express.json());

router.get("/", (req, res) => {
  const userId = req.query.userId;
  let allOffers = [];
  const products = {};
  const users = {};
  db.getAllOffersByUserId(userId)
    .then(data => {
      allOffers = data.rows;
      for (offer of allOffers) {
        users[offer.offerer_id] = true;
        users[offer.offeree_id] = true;
        products[offer.desired_product_id] = true;
        for (p of offer.offered_product_ids) {
          products[p] = true;
        }
      }
      const productList = Object.keys(products).map(k => Number(k));
      const userList = Object.keys(users).map(k => Number(k));
      return Promise.all([
        productDb.getProductsByIdList(productList),
        userDb.getUsernamesByIdList(userList)
      ]);
    })
    .then(results => {
      console.log(results);
      let productRows = results[0].rows;
      let userRows = results[1].rows;
      for (let fullProduct of productRows) {
        products[fullProduct.product_id] = fullProduct;
      }
      for (let fullUser of userRows) {
        users[fullUser.user_id] = fullUser.username;
      }
      for (offer of allOffers) {
        offer.desired_product = products[offer.desired_product_id];
        offer.offered_products = [];
        offer.offerer_name = users[offer.offerer_id];
        offer.offeree_name = users[offer.offeree_id];
        for (p of offer.offered_product_ids) {
          offer.offered_products.push(products[p]);
        }
      }
      res.status(200).send(allOffers);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});

router.get("/active", (req, res) => {
  const userId = req.query.userId;
  let activeOffers = [];
  const products = {};
  const users = {};
  db.getActiveOffersByUserId(userId)
    .then(data => {
      activeOffers = data.rows;
      for (offer of activeOffers) {
        users[offer.offerer_id] = true;
        users[offer.offeree_id] = true;
        products[offer.desired_product_id] = true;
        for (p of offer.offered_product_ids) {
          products[p] = true;
        }
      }
      const productList = Object.keys(products).map(k => Number(k));
      const userList = Object.keys(users).map(k => Number(k));
      return Promise.all([
        productDb.getProductsByIdList(productList),
        userDb.getUsernamesByIdList(userList)
      ]);
    })
    .then(results => {
      console.log(results);
      let productRows = results[0].rows;
      let userRows = results[1].rows;
      for (let fullProduct of productRows) {
        products[fullProduct.product_id] = fullProduct;
      }
      for (let fullUser of userRows) {
        users[fullUser.user_id] = fullUser.username;
      }
      for (offer of activeOffers) {
        offer.desired_product = products[offer.desired_product_id];
        offer.offered_products = [];
        offer.offerer_name = users[offer.offerer_id];
        offer.offeree_name = users[offer.offeree_id];
        for (p of offer.offered_product_ids) {
          offer.offered_products.push(products[p]);
        }
      }
      res.status(200).send(activeOffers);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});

router.get("/closed", (req, res) => {
  const userId = req.query.userId;
  let closedOffers = [];
  const products = {};
  const users = {};
  db.getClosedOffersByUserId(userId)
    .then(data => {
      closedOffers = data.rows;
      for (offer of closedOffers) {
        users[offer.offerer_id] = true;
        users[offer.offeree_id] = true;
        products[offer.desired_product_id] = true;
        for (p of offer.offered_product_ids) {
          products[p] = true;
        }
      }
      const productList = Object.keys(products).map(k => Number(k));
      const userList = Object.keys(users).map(k => Number(k));
      return Promise.all([
        productDb.getProductsByIdList(productList),
        userDb.getUsernamesByIdList(userList)
      ]);
    })
    .then(results => {
      console.log(results);
      let productRows = results[0].rows;
      let userRows = results[1].rows;
      for (let fullProduct of productRows) {
        products[fullProduct.product_id] = fullProduct;
      }
      for (let fullUser of userRows) {
        users[fullUser.user_id] = fullUser.username;
      }
      for (offer of closedOffers) {
        offer.desired_product = products[offer.desired_product_id];
        offer.offered_products = [];
        offer.offerer_name = users[offer.offerer_id];
        offer.offeree_name = users[offer.offeree_id];
        for (p of offer.offered_product_ids) {
          offer.offered_products.push(products[p]);
        }
      }
      res.status(200).send(closedOffers);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});

module.exports = router;
