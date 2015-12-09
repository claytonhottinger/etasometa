var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/eta');

var Channel = mongoose.model('Channel',{name: String,purpose: String});

/* GET users listing. */
router.get('/', function(req, res, next) {
  return Channel.find({}).exec(function(err,channels){
    if(err) throw new Error(err);
    res.send(JSON.stringify(channels));
    next();
  });
});

module.exports = router;
