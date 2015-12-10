var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../model/model')

/* GET users listing. */
router.get('/', function(req, res, next) {
  return model.find({}).exec(function(err,channels){
    if(err) next(err);
    res.send(JSON.stringify(channels));
  });
});

module.exports = router;
