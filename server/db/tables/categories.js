const pool = require('../postgres');

// --------------------------------------------------------------------------------------------------

/* Returns category by id*/
const getCategory = (categoryId) => {
  return pool.query({ text: `select * from categories where category_id = ${ categoryId }` });
};

/* Returns all categories */
const getAllCategories = () => {
  return pool.query({
    text: `select *
           from categories;`
  });
};


module.exports = {
  getCategory,
  getAllCategories
};


