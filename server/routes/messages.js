const express = require("express");
const router = express.Router();
const db = require("../db/tables/messages.js");


router.get("/", (req, res) => {
  const userId = req.query.userId;
  db.getMessagesByUserId(userId)
    .then(data => res.status(200).send(data))
    .catch(error => {
      res.status(404).send(error);
    });
});

module.exports = router;
