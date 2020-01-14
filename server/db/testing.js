// Testing queries

const pool = require('./postgres');

const testPostgres = () => {
  return pool.query({ text: `select * from categories;` });
};

const getCategory = () => {
  let categoryId = Math.floor(Math.random() * 20);
  return pool.query({ text: `select * from categories where category_id=${ categoryId }` });
};

const getCategories = () => {
  return pool.query({ text: `select * from categories;` });
};


const getProduct = () => {
  let productId = Math.floor(Math.random() * 1500);
  return pool.query({ text: `select * from products where product_id=${ productId };` });
};

const getProducts = () => {
  let offset = Math.floor(Math.random() * 1000000);
  return pool.query({ text: `select * from products offset ${offset} limit 50;` });
};


const getUser = () => {
  let userId = Math.floor(Math.random() * 100000);
  return pool.query({ text: `select * from users where user_id = ${ userId }` });
};

const getUsers = () => {
  let offset = Math.floor(Math.random() * 9950);
  return pool.query({ text: `select * from users offset ${offset} limit 50;` });
};


const getWishList = () => {
  let wishListId = Math.floor(Math.random() * 1000000);
  return pool.query({ text: `select * from wish_list where wish_list_id = ${ wishListId }` });
};

module.exports = {
  testPostgres,
  getCategory,
  getCategories,
  getProduct,
  getProducts,
  getUser,
  getUsers,
  getWishList
};
