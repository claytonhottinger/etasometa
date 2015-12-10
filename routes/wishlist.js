// take a post request and add the posted data to the 'channels' collection
var model = require('../model/model')
var express = require('express');
var router = express.Router();



router.post('/', function(req, res, next) {
  console.log(req.body);
  var channels = new model(req.body);
  return channels.save(function(err, channels) {
    if(err) next(err);
    res.send(JSON.stringify(channels));
  });
});

module.exports = router;