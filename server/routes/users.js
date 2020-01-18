const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const db = require('../db/tables/users.js');

// --------------------------------------------------------------------------------------------------

/* Signup route */
router.post('/signup', upload.single(), (req, res) => {
	const item = req.body;
	console.log(item);
	res.send('ok');
});

// router.get("/authentication", (req, res) => {
// });

/* */
router.get('/userInformationUsername', (req, res) => {
	const {username} = req.query;
	console.log(username);
	db.getUserDataByUsername(username)
		.then(data => res.status(200).send(data))
		.catch(error => {
			console.log(error);
			res.status(400).send(error);
		});
});

/* */
router.get('/userInformationId', (req, res) => {
	const userId = req.query.id;
	db.getUserDataById(userId)
		.then(data => res.status(200).send(data))
		.catch(error => {
			console.log(error);
			res.status(400).send(error);
		});
});

module.exports = router;
