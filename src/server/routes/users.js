var express = require('express');
var router = express.Router();


router.get('/current', function(req, res, next) {
  res.json({
    firstName: 'John',
    lastName: 'Doe',
  });
});

module.exports = router;
