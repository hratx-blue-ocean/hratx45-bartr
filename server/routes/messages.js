const express = require("express");
const router = express.Router();
const db = require("../db/tables/messages.js");

// --------------------------------------------------------------------------------------------------

/* Returns messages by user id  */
router.get("/", (req, res) => {
  const {userId} = req.query;
  db.getMessagesByUserId(userId)
    .then(data => res.status(200).send(data.rows))
    .catch(error => {
      res.status(404).send(error);
    });
});

/* Posts message */
router.post("/", (req, res) => {
  db.postMessage(req.body)
    
    .then(() => res.sendStatus(200))
    .catch(error => {
      console.log(`FILE: messages.js () | error: \n`, error);
      res.status(404).send(error);
    });
});






module.exports = router;
