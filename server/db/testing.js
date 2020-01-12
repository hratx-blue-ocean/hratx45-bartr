const pool = require('./postgres');

const testPostgres = () => {
  return pool.query({ text: `select * from categories;` });
};

const getCategory = () => {
  let categoryId = Math.floor(Math.random() * 20);
  return pool.query({ text: `select * from categories where category_id=${ categoryId }` });
};

const getProduct = () => {
  let productId = Math.floor(Math.random() * 1500);
  return pool.query({ text: `select * from products where product_id=${ productId };` });
};

const getUser = () => {
  let userId = Math.floor(Math.random() * 1500);
  return pool.query({ text: `select * from users where user_id = ${ userId }` });
};

const getWishList = () => {
  let wishListId = Math.floor(Math.random() * 1500);
  return pool.query({ text: `select * from wish_list where wish_list_id = ${ wishListId }` });
};

module.exports = {
  testPostgres,
  getCategory,
  getProduct,
  getUser,
  getWishList
};
