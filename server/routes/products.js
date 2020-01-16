const express = require("express");
const router = express.Router();
const db = require("../db/tables/products.js");
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

router.post("/product", (req, res) => {
  const item = req.query.item;
  // db.addNewProduct(item)
  //   .then(data => res.status(200).send(data))
  //   .catch(error => res.status(400).send(error));
});

router.get("/productId", (req, res) => {
  const productId = req.query.productId;
  console.log(productId);
  db.getProductById(productId)
    .then(data => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});

router.get("/category", (req, res) => {
  const categoryId = req.query.categoryId;
  db.getProductsByCategory(categoryId)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});

router.get("/productsByUser", (req, res) => {
  const userId = req.query.id;
  db.getProductsByUser(userId)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(error));
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
  db.getProductPhotosById(productId)
    .then(result => {
      res.send(result);
    })
    .catch(error => res.status(400).send(error));
});

// router.get("/internalBase64", (req, res) => {
//   const images = [
//     "/Users/alyssawadley/Documents/GitHub/hratx45-bartr/server/public/assets/testing/images/profiles/1.jpg",
//     "/Users/alyssawadley/Documents/GitHub/hratx45-bartr/server/public/assets/testing/images/profiles/2.jpg",
//     "/Users/alyssawadley/Documents/GitHub/hratx45-bartr/server/public/assets/testing/images/profiles/3.jpg",
//     "/Users/alyssawadley/Documents/GitHub/hratx45-bartr/server/public/assets/testing/images/profiles/4.jpg",
//     "/Users/alyssawadley/Documents/GitHub/hratx45-bartr/server/public/assets/testing/images/profiles/5.jpg",
//     "/Users/alyssawadley/Documents/GitHub/hratx45-bartr/server/public/assets/testing/images/profiles/6.jpg",
//     "/Users/alyssawadley/Documents/GitHub/hratx45-bartr/server/public/assets/testing/images/profiles/7.jpg",
//     "/Users/alyssawadley/Documents/GitHub/hratx45-bartr/server/public/assets/testing/images/profiles/8.jpg",
//     "/Users/alyssawadley/Documents/GitHub/hratx45-bartr/server/public/assets/testing/images/profiles/9.jpg",
//     "/Users/alyssawadley/Documents/GitHub/hratx45-bartr/server/public/assets/testing/images/profiles/10.jpg"
//   ];
//   let promiseArray = [];
//   for (let i = 0; i < images.length; i++) {
//     let filePath = images[i];
//     promiseArray.push(fs.readFileAsync(filePath));
//   }
//   Promise.all(promiseArray)
//     .then(bitmaps => {
//       console.log(bitmaps);
//       let buffers = [];
//       for (let i = 0; i < bitmaps.length; i++) {
//         let buffer = "data:image/jpg;base64, " + bitmaps[i].toString("base64");
//         buffers.push(buffer);
//       }
//       res.status(200).send(buffers);
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(400).send(error);
//     });
// });

module.exports = router;
