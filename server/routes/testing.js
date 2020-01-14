const express = require('express');
const router = express.Router();

const {
  testPostgres,
  getCategory,
  getCategories,
  getProduct,
  getProducts,
  getUser,
  getUsers,
  getWishList
} = require('../db/testing');

// --------------------------------------------------------------------------------------------------
// Test routes

/* Tests if server is up */
router.get('/test-get', (req, res) => {
    res.send('GET /api/test-get | Get working');
});

/* Tests PostgresSQL connection */
router.get('/test-postgres', (req, res) => {
    testPostgres()
        .then(result => {
        	res.send(result.rows);
        })
        .catch(() => {
        	res.sendStatus(500);
        });
});

/* Gets 1 row from categories */
router.get('/test-postgres/category', (req, res) => {
    getCategory()
        .then(result => {
            res.send(result.rows);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

/* Gets 1 row from products */
router.get('/test-postgres/product', (req, res) => {
    getProduct()
        .then(result => {
            res.send(result.rows);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

/* Gets 1 row from users */
router.get('/test-postgres/user', (req, res) => {
    getUser()
        .then(result => {
            res.send(result.rows);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

/* Gets all categories from table */
router.get('/test-postgres/categories', (req, res) => {
    getCategories()
        .then(result => {
            res.send(result.rows);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

/* Gets 50 products from table */
router.get('/test-postgres/products', (req, res) => {
    getProducts()
        .then(result => {
            res.send(result.rows);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

/* Gets 50 users from table */
router.get('/test-postgres/users', (req, res) => {
    getUsers()
        .then(result => {
            res.send(result.rows);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

/* Gets a random row from wish list */
router.get('/test-postgres/wish-list', (req, res) => {
    getWishList()
        .then(result => {
            res.send(result.rows);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

router.get('/debug-sentry', function mainHandler(req, res) {
  throw new Error('Sentry error testing');
});


module.exports = router;

