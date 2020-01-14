const pool = require('../postgres');

const getMessagesByUserId = (userId) => {
  return pool.query({
    text: `select * from messages where recipient_id=${userId} and sender_id=${userId};`
  });
};




module.exports = {
  getMessagesByUserId
};


