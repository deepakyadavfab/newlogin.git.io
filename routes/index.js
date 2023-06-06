var express = require('express');
var router = express.Router();
// var fs = require("fs");

var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
  res.render('index');
} );

router.post('/formsubmit',function(req,res,next){
  res.render('render',{email:`${req.body.email}`,password:`${req.body.password}`})
});
module.exports =router
