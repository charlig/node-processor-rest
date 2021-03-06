//dependancies
var express = require('express');
var mongoose = require('mongoose');
var bodyParaser = require('body-parser');
var path = require('path');

var router = express.Router();


//connect to mongoDB
mongoose.connect('mongodb://chalaka:0114931511@ds155811.mlab.com:55811/chfbdb');

// express;
var app = express();
app.use(bodyParaser.urlencoded({extended:true}));
app.use(bodyParaser.json());

// view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

// routes
// app.use('/api',require('./routes/api'));
app.use('/log',require('./routes/log'));
app.use('/',require('./routes/index'));
// require('./routes/log')(app);

// sart server
app.listen(1000);
console.log('Server is running on port 1000');