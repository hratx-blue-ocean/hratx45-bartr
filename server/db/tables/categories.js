const pool = require('../postgres');

const getCategory = (categoryId) => {
  return pool.query({ text: `select * from categories where category_id = ${ categoryId }` });
};

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


