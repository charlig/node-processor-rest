//dependancies
var express = require('express');
var mongoose = require('mongoose');
var bodyParaser = require('body-parser');


//connect to mongoDB
mongoose.connect('mongodb://chalaka:0114931511@ds155811.mlab.com:55811/chfbdb');

// express;
var app = express();
app.use(bodyParaser.urlencoded({extended:true}));
app.use(bodyParaser.json());

// routes
app.use('/api',require('./routes/api'));

// sart server
app.listen(1000);
console.log('Server is running on port 1000');