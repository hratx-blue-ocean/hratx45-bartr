const pool = require('../postgres');

// --------------------------------------------------------------------------------------------------

/* Returns wish list products by user id */
const getWishListProductsByUserId = (userId) => {
  return pool.query(
    {
      text: `select * from products
                        where product_id in (
                            select product_id from wish_list
                            where user_id = ${ userId }
                        );`
    });
};


module.exports = {
  getWishListProductsByUserId
};


