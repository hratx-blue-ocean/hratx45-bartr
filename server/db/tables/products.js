const pool = require('../postgres');

const getProduct = (productId) => {
    return pool.query({text:`select * from products where product_id = ${productId}`});
};



module.exports = {
    getProduct
};

