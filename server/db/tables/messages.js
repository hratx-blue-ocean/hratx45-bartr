const pool = require('../postgres');

/* Get all messages by user id */
const getMessagesByUserId = (userId) => {
  let sql = `
    select a.*, c.username as sender_username, b.username as recipient_username
    from messages a,
         users b,
         users c
    where
    a.recipient_id = b.user_id and
    a.sender_id = c.user_id and
    ${userId} in  (a.recipient_id, a.sender_id);`;
  return pool.query({
    text: sql
  });
};

const postMessage = (body) => {
  const { senderId, recipientId, date, message} = body;
  let sql = `
  insert into messages
      (sender_id, recipient_id, date, message)
      values (${senderId}, ${recipientId}, '${date}', '${message}');
  `;
  return pool.query({
    text: sql
  });
};


module.exports = {
  getMessagesByUserId,
  postMessage
};





