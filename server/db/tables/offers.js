const pool = require("../postgres");

/* Get all active offers by user id */
const getAllOffersByUserId = userId => {
  let sql = `
    SELECT * FROM offers 
    WHERE (offerer_id = $1 OR offeree_id = $1)`;
  return pool.query({
    text: sql,
    values: [userId]
  });
};

/* Get all active offers by user id */
const getActiveOffersByUserId = userId => {
  let sql = `
    SELECT * FROM offers 
    WHERE (offerer_id = $1 OR offeree_id = $1)
    AND status = 'pending'`;
  return pool.query({
    text: sql,
    values: [userId]
  });
};

/* Get all active offers by user id */
const getClosedOffersByUserId = userId => {
  let sql = `
    SELECT * FROM offers 
    WHERE (offerer_id = $1 OR offeree_id = $1)
    AND (status = 'rejected' OR status = 'accepted')`;
  return pool.query({
    text: sql,
    values: [userId]
  });
};

module.exports = {
  getClosedOffersByUserId,
  getActiveOffersByUserId,
  getAllOffersByUserId
};
