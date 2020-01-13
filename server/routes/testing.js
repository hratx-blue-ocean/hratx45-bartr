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

router.get('/test-get', (req, res) => {
    res.send('GET /api/test-get | Get working');
});

router.post('/test-post', (req, res) => {
    router.send('POST /api/test-post  | Post working');
});

router.get('/test-postgres', (req, res) => {
    testPostgres()
        .then(result => {
        	res.send(result.rows);
        })
        .catch(() => {
        	res.sendStatus(500);
        });
});


router.get('/test-postgres/category', (req, res) => {
    getCategory()
        .then(result => {
            res.send(result.rows);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

router.get('/test-postgres/product', (req, res) => {
    getProduct()
        .then(result => {
            res.send(result.rows);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

router.get('/test-postgres/user', (req, res) => {
    getUser()
        .then(result => {
            res.send(result.rows);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});


router.get('/test-postgres/categories', (req, res) => {
    getCategories()
        .then(result => {
            res.send(result.rows);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

router.get('/test-postgres/products', (req, res) => {
    getProducts()
        .then(result => {
            res.send(result.rows);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

router.get('/test-postgres/users', (req, res) => {
    getUsers()
        .then(result => {
            res.send(result.rows);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

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

