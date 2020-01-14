const pool = require('../postgres');

/* Returns products by their */
const getProductById = (productId) => {
  return pool.query({ text: `select * from products where product_id = ${ productId }` });
};

/* Gets all products by their category */
const getProductsByCategory = (categoryId) => {
  return pool.query({ text: `select * from products where category_id = ${ categoryId }` });
};

/* Returns all products by user id */
const getProductsByUser = (userId) => {
  return pool.query({ text: `select * from products where user_id = ${ userId }` });
};

/* Returns all products by users longitude and latitude */
const getProductsByProximityByUserId = (userId, miles) => {
  let sql = `
    select * from products
    where user_id in (
      select user_id from users
      where ST_DWithin(
                    geom,
                    (select geom from users where user_id = ${userId}),
                    ${miles} *1609,
                    false
      )
    ) limit 200;
  `;
  return pool.query({ text: sql });
};

/* Returns all products within x miles by longitude and latitude */
const getProductsByProximityByLongLat = (longitude, latitude, miles) => {
 
	let sql = `
	  SELECT latitude, longitude, state
    FROM users
    WHERE ST_DWithin(
        geom,
        ST_MakePoint(${longitude},${latitude}),
        ${miles} *1609,
        false
        )
    limit 200;
  `;
  return pool.query({ text: sql });
};


module.exports = {
  getProductById,
  getProductsByCategory,
  getProductsByUser,
  getProductsByProximityByUserId,
  getProductsByProximityByLongLat
};

