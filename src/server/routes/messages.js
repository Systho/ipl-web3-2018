var express = require('express');
var router = express.Router();
const db = require('../modules/db.js');

router.get('/', function(req, res, next) {
  db.db.collection('messages').find().toArray().then((messages) => {
    res.json(messages);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

router.get('/:id', function(req, res, next) {
  db.db.collection('messages').findOne({_id: new db.ObjectID(req.params.id)}).then((message) => {
    res.json(message);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

router.delete('/:id', function(req, res, next) {
  db.db.collection('messages').findOneAndDelete({_id: new db.ObjectID(req.params.id)}).then((result) => {
    res.json(result.value);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

router.post('/', function(req, res, next) {
  db.db.collection('messages').insertOne(req.body).then((result) => {
    req.body._id = result.insertedId;
    res.json(req.body);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

router.put('/:id', function(req, res, next) {
  delete req.body._id;
  db.db.collection('messages').findOneAndUpdate({_id: new db.ObjectID(req.params.id)}, {$set: req.body}, {returnOriginal: false}).then((result) => {
    res.json(result.value);
  }).catch((err) => {
    console.log(err);
    res.status(500).send(err);
  });
});

module.exports = router;
