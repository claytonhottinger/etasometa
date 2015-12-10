var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/eta');

var Channel = mongoose.model('Channel',{name: String,purpose: String});

module.exports = Channel;