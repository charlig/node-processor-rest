// dependencies

var express= require('express');
var router = express.Router();

// get models
var status = require('../models/status');

// routes:
status.methods(['get','post','put','delete']);
// status.methods(['get','post','put']);
status.register(router,'/status');

// route.delete('/status/deleteAll',function(req,res,call){
    
// });

// return route
module.exports = router;