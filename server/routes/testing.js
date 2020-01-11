const express = require('express');
const router = express.Router();

const {
    testPostgres,
    getCategory,
    getProduct,
    getUser,
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


router.get('/test-postgres/categories', (req, res) => {
    getCategory()
        .then(result => {
            res.send(result.rows);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

router.get('/test-postgres/products', (req, res) => {
    getProduct()
        .then(result => {
            res.send(result.rows);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

router.get('/test-postgres/users', (req, res) => {
    getUser()
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




module.exports = router;

