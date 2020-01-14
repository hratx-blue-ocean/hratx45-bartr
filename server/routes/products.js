const express = require("express");
const router = express.Router();
const db = require("../db/tables/products.js");
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

router.get("/productId", (req, res) => {
  const productId = req.query.productId;
  db.getProductById(productId)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(error => {
      res.status(404).send(error);
    });
});

router.get("/category", (req, res) => {
  const categoryId = req.query.categoryId;
  db.getProductsByCategory(categoryId)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});

router.get("/userIdProximity", (req, res) => {
  db.getProductsByProximityByUserId(userId, distance)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});

router.get("/locationProximity", (req, res) => {
  const longitude = req.query.longitude;
  const latitude = req.query.latitude;
  const proximity = req.query.proximity;
  db.getProductsByProximityByLongLat(longitude, latitude, proximity)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});

router.get("/productPhotos", (req, res) => {
  const productId = req.query.productId;
  const images = [
    "/Users/alyssawadley/Documents/GitHub/hratx45-bartr/server/public/assets/testing/images/products/1.jpeg",
    "/Users/alyssawadley/Documents/GitHub/hratx45-bartr/server/public/assets/testing/images/products/1i.jpeg",
    "/Users/alyssawadley/Documents/GitHub/hratx45-bartr/server/public/assets/testing/images/products/2.jpeg",
    "/Users/alyssawadley/Documents/GitHub/hratx45-bartr/server/public/assets/testing/images/products/2i.jpeg"
  ];
  let promiseArray = [];
  for (let i = 0; i < images.length; i++) {
    let filePath = images[i];
    promiseArray.push(fs.readFileAsync(filePath));
  }
  Promise.all(promiseArray)
    .then(bitmaps => {
      console.log(bitmaps);
      let buffers = [];
      for (let i = 0; i < bitmaps.length; i++) {
        let buffer = bitmaps[i].toString("base64");
        buffers.push(buffer);
      }
      res.status(200).send(buffers);
    })
    .catch(error => {
      res.status(400).send(error);
      console.log(error);
    });
});

module.exports = router;
