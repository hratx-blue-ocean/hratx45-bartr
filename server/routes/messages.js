const express = require('express');
const router = express.Router();
const db = require('../db/tables/messages.js');

// --------------------------------------------------------------------------------------------------

/* Returns messages by user id  */
router.get('/', (req, res) => {
  const { userId } = req.query;
  db.getMessagesByUserId(userId)
    .then(data => res.status(200).send(data.rows))
    .catch(error => {
      res.status(404).send(error);
    });
});

/* Returns threads and messages by user id */
router.get('/threads', (req, res) => {
  const { userId } = req.query;
  let threads = {};
  db.getMessageThreadsOnly(userId)
    .then(data => {
      for (let thread of data.rows) {
        threads[thread.id] = thread;
      }
      return db.getMessageThreadsByUserId(userId);
    })
    .then(data => {
      for (let message of data.rows) {
        if (!threads[message.thread_id]['messages']) {
          threads[message.thread_id]['messages'] = [];
        }
        threads[message.thread_id].messages.push({
          sender_id: message.sender_id,
          recipient_id: message.recipient_id,
          date: message.date,
          message: message.message
        });
      }
      res.status(200).send(Object.values(threads));
    })
    .catch(error => {
      res.status(404).send(error);
    });
});

/* Posts message */
router.post('/', (req, res) => {
  db.postMessage(req.body)

    .then(() => res.sendStatus(200))
    .catch(error => {
      console.log(`FILE: messages.js () | error: \n`, error);
      res.status(404).send(error);
    });
});

module.exports = router;
