const express = require("express");
const router = express.Router();

const db = require("../db/tables/users.js");

router.post("/signup", (req, res) => {
  let item = req.body;
  console.log(item);
  res.status.send("ok");
});

// router.get("/authentication", (req, res) => {
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
