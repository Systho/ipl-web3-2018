var express = require('express');
var router = express.Router();
const db = require('../modules/db.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const jwtSecret = process.env.JWT_SECRET;

router.post('/', function(req, res, next) {
  db.db.collection('users').findOne({email: req.body.email}).then((user) => {
    console.log(user);
    if (user) {
      bcrypt.compare(req.body.password, user.password, function(err, result) {
        console.log(err, result)
        if (err) {
          res.status(500).send(err);
        } else if (result) {
          var exp = Date.now() + 12 * 60 * 60 * 1000;   // 12h
          jwt.sign({ user: user._id, exp: exp}, jwtSecret, (err, token) => {
            if (err) {
              res.status(500).send("error during token signing");
            } else {
              res.json({ jwt: token, user: user });
            }
        });
        } else {
          res.status(401).send("bad email/password");
        }
      });
    } else {
      res.status(401).send("bad email/password");
    }
  });
});

module.exports = router;
