const pool = require('../postgres');

// --------------------------------------------------------------------------------------------------

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

/* Get all messages with associated message threads by user id */
const getMessageThreadsByUserId = (userId) => {
  let sql = `select b.id as thread_id, b.user_one_id, b.user_one_name, b.user_two_id, b.user_two_name, a.*
  from messages a,
       message_threads b
  where
  a.recipient_id in (b.user_one_id, b.user_two_id) and
  a.sender_id in (b.user_one_id, b.user_two_id) and
  ${userId} in (a.recipient_id, a.sender_id);`
  return pool.query({
    text: sql
  });
};

const getMessageThreadsOnly = (userId) => {
  let sql = `select * from message_threads m where ${userId} in (user_one_id, user_two_id);`
  return pool.query({
    text: sql
  });
}

/* Post message */
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
  getMessageThreadsOnly,
  getMessageThreadsByUserId,
  postMessage
};





