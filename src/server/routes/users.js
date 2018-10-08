var express = require('express');
var router = express.Router();
const db = require('../modules/db.js');

router.get('/current', function(req, res, next) {
  db.db.collection('users').findOne().then((user) => {
    res.json(user);
  });
});

module.exports = router;
