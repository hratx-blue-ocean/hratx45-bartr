const pool = require('../postgres');

const getProduct = (productId) => {
  return pool.query({ text: `select * from products where product_id = ${ productId }` });
};

const getProductsbyCategory = (categoryId) => {
  return pool.query({ text: `select * from products where category_id = ${ categoryId }` });
};

const getProductsbyUser = (userId) => {
  return pool.query({ text: `select * from products where user_id = ${ userId }` });
};

module.exports = {
  getProduct,
  getProductsbyCategory,
  getProductsbyUser
};

