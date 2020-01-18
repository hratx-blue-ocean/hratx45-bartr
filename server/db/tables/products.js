const pool = require("../postgres");
const _ = require("underscore");

// --------------------------------------------------------------------------------------------------

/* Returns products by their id*/
const getProductById = productId => {
  return pool.query({
    text: `select * from products where product_id = ${productId};`
  });
};

/* Returns all photos for product by id*/
const getProductPhotosById = productId => {
  return pool.query({
    text: `select * from product_images where product_id = ${productId};`
  });
};

/* Returns all products by their category */
const getProductsByCategory = categoryId => {
  return pool.query({
    text: `select * from products where category_id = ${categoryId}`
  });
};

/* Returns all products by user id */
const getProductsByUser = userId => {
  return pool.query({
    text: `select * from products where user_id = ${userId};`
  });
};

const getProductsByIdList = idList => {
  if (idList.length === 0) return Promise.resolve({ rows: [] });
  return pool.query({
    text: `SELECT * FROM products WHERE product_id IN (${idList.join(", ")})`
  });
};

/* Rertuns products up for trade */
const getProductsUpForTrade = userId => {
  return pool.query({
    text: `select * from products INNER JOIN product_images 
    ON products.product_id = product_images.product_id WHERE user_id = ${userId} and up_for_trade='True'`
  });
};

/* Returns 50 products by post date */
const getProductsByPostDate = () => {
  return pool.query({
    text: "select * from products ORDER BY posted_date DESC LIMIT 50;"
  });
};

/* Returns all products by users longitude and latitude */
const getProductsByProximityByUserId = (userId, miles, limit = 50) => {
  let sql = `
      select b.username, a.*, c.image
      from products as a,
           users as b,
           product_images as c
      where a.user_id in (
          SELECT user_id
          FROM users
          WHERE ST_DWithin(
                        geom,
                        ST_MakePoint((select longitude from users where user_id = ${userId}),
                                     (select latitude from users where user_id = ${userId})),
                        ${miles} * 1609,
                        false
                    )
      )
        and a.sold = 'False'
        and a.public = 'True'
        and a.user_id = b.user_id
        and a.product_id = c.product_id
        limit ${limit};
  `;
  return pool.query({ text: sql });
};

/* Returns all products within x miles by longitude and latitude */
const getProductsByProximityByLongLat = (
  longitude,
  latitude,
  miles,
  limit = 50
) => {
  let sql = `
      select p.*,
             users.latitude,
             users.longitude,
             users.zip_code,
             users.username
      from
          products as p
              INNER JOIN users on (users.user_id = p.user_id)
      where p.user_id in (
          SELECT user_id
          FROM users
          WHERE ST_DWithin(
                        geom,
                        ST_MakePoint(${longitude}, ${latitude}),
                        ${miles} *1609,
                        false
                    )
      ) limit ${limit};`;
  return pool.query({ text: sql });
};

const addPhotosToProductRows = rows => {
  return pool.query({ text: "select * from product_images;" }).then(result => {
    for (let row of rows) {
      row["photos"] = _.pluck(
        _.where(result.rows, { product_id: row["product_photo_id"] }),
        "image"
      );
    }
    return rows;
  });
};

/* Add new product */
const addNewProduct = item => {
  let sql = `INSERT INTO products (user_id, product_name, product_description, value, up_for_trade, sold, posted_date)
   VALUES (${item.owner_id}, '${item.name}', '${item.description}', '${item.value}',
   'TRUE', 'FALSE', '${item.date}');`;
  return pool.query({ text: sql });
};

/* Add new product photos */
const addNewProductPhotos = (itemId, photoString) => {
  let sql = `INSERT INTO product_images(product_id, image) VALUES (${itemId}, '${photoString}')`;
  return pool.query({ text: sql });
};

const getProductPhotosByProductId = productId => {
  return pool.query({
    text: `select * from product_images where product_id = (
        select product_photo_id from products where product_id = ${productId}
    );
    `
  });
};

module.exports = {
  getProductById,
  getProductsByCategory,
  getProductsByUser,
  getProductsByProximityByUserId,
  getProductsByProximityByLongLat,
  getProductPhotosById,
  getProductPhotosByProductId,
  addNewProduct,
  getProductsByPostDate,
  addNewProductPhotos,
  getProductsUpForTrade,
  addPhotosToProductRows,
  getProductsByIdList
};

// Get products, username, 1 photo
