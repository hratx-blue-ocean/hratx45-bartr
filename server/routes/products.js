const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

router.use(express.json());
const db = require("../db/tables/products.js");

// TODO: Add owners username
// --------------------------------------------------------------------------------------------------

/* Returns products by proximity using user id */
router.get("/userIdProximity", (req, res) => {
  const { userId, distance } = req.query;
  db.getProductsByProximityByUserId(userId, distance)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});

/* Returns products by latitude and longitude */
router.get("/locationProximity", (req, res) => {
  const { longitude, latitude, proximity } = req.query;
  db.getProductsByProximityByLongLat(longitude, latitude, proximity)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});

/* Returns products by their posting date */
router.get("/itemsByPostDate", (req, res) => {
  db.getProductsByPostDate()
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(error));
});

/* Returns products up fro trade by user id */
router.get("/productsUpForTrade", (req, res) => {
  const { userId } = req.query;
  db.getProductsUpForTrade(userId)
    .then(data => res.status(200).send(data))
    .catch(error => {
      console.log(error);
      res.status(400).send(error);
    });
});

/* Returns product info by product id*/
router.get("/productId", (req, res) => {
  const { productId } = req.query;
  let response = {
    rows: [],
    images: []
  };
  db.getProductById(productId)
    .then(data => {
      response.rows = data.rows;
      return db.getProductPhotosByProductId(productId);
    })
    .then(data => {
      response.images = data.rows;
      res.status(200).send(response);
    })
    .catch(error => {
      console.log(error);
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
    .catch(error => {
      console.log(error);
      res.status(400).send(error);
    });
});

/*upload new product */
router.post("/product", upload.array("image"), (req, res) => {
  const item = req.body;
  const files = req.files;
  const basePath = "https://paperclip.link/data/images/client_uploads/";
  const filePaths = [];
  const promisesArray = [];

  for (let i = 0; i < files.length; i++) {
    let fullPath = basePath + files[i].originalname;
    promisesArray.push(fs.writeFileAsync(fullPath, files[i].buffer));
    filePaths.push(fullPath);
  }
  Promise.all(promisesArray)
    .then(data => {
      db.getCurrentMaxId().then(result => {
        const newId = result.rows[0].product_id + 1;
        console.log(newId);
        db.addNewProduct(newId, item).then(result => {
          let imagePromiseArray = [];
          for (let i = 0; i < filePaths.length; i++) {
            console.log(filePaths[i]);
            imagePromiseArray.push(db.addNewProductPhotos(newId, filePaths[i]));
          }
          Promise.all(imagePromiseArray)
            .then(result => res.send("upload successful"))
            .catch(error => {
              console.log(error);
              res.status(400).send("error in item upload");
            });
        });
      });
    })
    .catch(error => {
      console.log(error);
      res.status(400).send("error in item upload");
    });
});

/*Extra Routes*/
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

module.exports = router;

// --------------------------------------------------------------------------------------------------
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
