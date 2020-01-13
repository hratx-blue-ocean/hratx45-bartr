const router = require("./example");
const bcrypt = require("bcrypt");
const saltRounds = 12;

router.post("/user/signup", (req, res) => {
  const username = req.username;
  const pw = req.password;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    if (error) {
      console.log(err);
      res.status(400).end();
    } else {
      bcrypt.hash(pw, salt, function(err, hash) {
        // db write to database
        //params: username, firstname, last name, phone #, age, address, city, zip
        res.status(200).send();
      });
    }
  });
});

router.get("./users/auth", (req, res) => {
  let username = req.username;
  let pw = req.password;
  let hash = bcrypt.compare(pw, hash, function(err, result) {
    // database call to get stored hash
    if (err || result === false) {
      res.status(401).send(false);
    } else {
      res.status(200).send(true);
    }
  });
});
