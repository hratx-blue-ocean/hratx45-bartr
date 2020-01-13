const express = require("express");
const router = express.Router();
const db = require("../db/tables/products.js");

router.get("/products/:productId", (req, res) => {
  const productId = req.params.id;
  db.getProductById(productId)
    .then(data => res.status(200).send(data))
    .catch(error => {
      res.status(404).send(error);
    });
});

router.get("/products/category/:categoryId", (req, res) => {
  const categoryId = req.params.categoryId;
  db.getProductsByCategory(categoryId)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});

router.get("/products/user/:userId/distance/:proximity", (req, res) => {
  const userId = req.params.userId;
  const distance = req.params.proximity;
  db.getProductsByProximityByUserId(userId, distance)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});

router.get(
  "/products/longitude/:longitudePoint/latitude/:latitudePoint/distance:proximity",
  (req, res) => {
    const longitude = req.params.longitude;
    const latitude = req.params.longitude;
    const proximity = req.params.proximity;
    db.getProductsByProximityByLongLat(longitude, latitude, proximity)
      .then(data => res.status(200).send(data))
      .catch(error => res.status(404).send(error));
  }
);
