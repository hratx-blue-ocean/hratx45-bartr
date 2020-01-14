const express = require("express");
const router = express.Router();

const db = require("../db/tables/users.js");

const bcrypt = require("bcrypt");
const saltRounds = 12;

router.post("/user/signup", (req, res) => {
  const user = req.query.userData;
  const pw = user.password;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    if (error) {
      console.log(err);
      res.status(400).end();
    } else {
      bcrypt.hash(pw, salt, function(err, hash) {
        if (error) {
          res.status(400).end();
        }
        user.password = hash;
        db.addNewUser(user)
          .then(result => res.status(200).send(result))
          .catch(error => res.status(400).send(error));
      });
    }
  });
});

router.get("/users/auth", (req, res) => {
  let username = req.username;
  let pw = req.password;
  let hash = bcrypt.compare(pw, hash, function(err, result) {
    // database call to get stored hash
    if (err || result === false) {
      res.status(401).send(false);
    } else {
      res.status(200).send(true);
    }
  });
});
