const pool = require('../postgres');

/* Get all messages by user id */
const getMessagesByUserId = (userId) => {
  return pool.query({
    text: `select * from messages where recipient_id=${userId} or sender_id=${userId};`
  });
};




module.exports = {
  getMessagesByUserId
};


