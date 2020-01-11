const express = require('express');
const router = express.Router();

// --------------------------------------------------------------------------------------------------
// Test routes

router.get('/test-get', (req, res) => {
    res.send('GET /api/test-get | Get working');
});

router.post('/test-post', (req, res) => {
    router.send('POST /api/test-post  | Post working')
});


module.exports = router;
