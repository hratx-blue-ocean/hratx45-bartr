const express = require("express");
const router = express.Router();
var multer = require("multer");
const upload = multer();

router.use(express.json());

const db = require("../db/tables/products.js");

/*Sends list item information by distance*/

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

/*Sends list item by post date*/

router.get("/itemsByPostDate", (req, res) => {
  db.getProductsByPostDate()
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(error));
});

/* Sends full data for  item detail page*/

router.get("/productId", (req, res) => {
  const productId = req.query.productId;
  console.log(productId);
  db.getProductById(productId)
    .then(data => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch(error => {
      res.status(404).send(error);
    });
});

/* Sends all photos for item detail page */

router.get("/productPhotos", (req, res) => {
  const productId = req.query.productId;
  db.getProductPhotosById(productId)
    .then(result => {
      res.send(result);
    })
    .catch(error => res.status(400).send(error));
});

// router.get("/itemsByNameIncludes", (req, res));

/* Post new product to database */
router.post("/product", upload.array("image"), (req, res) => {
  const item = req.body;
  const files = req.files;
  // db.addNewProduct(item)
  //   .then(result => {
  //     console.log(result);
  //     res.status(200).send("ok");
  //   })
  //   .catch(error => {
  //     res.status(400).send(error);
  //   });
  console.log(item);
  console.log(files);
  res.send("ok");
});

module.exports = router;
