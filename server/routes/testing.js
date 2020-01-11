const express = require('express');
const router = express.Router();

const {testPostgres} = require('../db/queries');

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








module.exports = router;

