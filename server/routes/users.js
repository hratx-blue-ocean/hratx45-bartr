const express = require("express");
const router = express.Router();

const db = require("../db/tables/users.js");

// const bcrypt = require("bcrypt");
// const saltRounds = 12;

// router.post("/signup", (req, res) => {
//   const user = req.query.userData;
//   const pw = user.password;
//   bcrypt.genSalt(saltRounds, function(err, salt) {
//     if (err) {
//       res.status(400).end();
//     } else {
//       bcrypt.hash(pw, salt, function(err, hash) {
//         if (err) {
//           res.status(400).end();
//         }
//         user.password = hash;
//         db.addNewUser(user)
//           .then(result => res.status(200).send(result))
//           .catch(error => res.status(400).send(error));
//       });
//     }
//   });
// });

// router.get("/authentication", (req, res) => {
//   let username = req.query.username;
//   let pw = req.query.password;
//   db.getHashByUsername(username)
//     .then(hash => {
//       bcrypt.compare(pw, hash, function(err, result) {
//         if (err || result === false) {
//           res.status(401).send(false);
//         } else {
//           res.status(200).send(true);
//         }
//       });
//     })
//     .catch(error => res.status(400).send(false));
// });

router.get("/userInformationUsername", (req, res) => {
  let username = req.query.username;
  db.getUserDataByUsername(username)
    .then(data => res.status(200).send(data))
    .catch(error => {
      console.log(error);
      res.status(400).send(error);
    });
});

router.get("/userInformationId", (req, res) => {
  let userId = req.query.id;
  db.getUserDataById(userId)
    .then(data => res.status(200).send(data))
    .catch(error => {
      console.log(error);
      res.status(400).send(error);
    });
});

module.exports = router;
