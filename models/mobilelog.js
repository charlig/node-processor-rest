// var restful = require('node-restful');
// var mongoose = restful.mongoose;
var mongoose = require('mongoose');
var mobileLogSchema = mongoose.Schema({
    phone:String,
    callType:String,
    callDate:String,
    callDuration:String
});

// return models
const mobile =module.exports=mongoose.model('Mobilelog',mobileLogSchema);

module.exports.getOneUserById =  function(id,callback){
    const query = {_id:id}
    mobile.findOne(query,callback);
}

module.exports.removeLogById =  function(id,callback){
    const query = {_id:id}
    mobile.remove(query,callback);
}
module.exports.removeAll =  function(callback){
    const query = {}
    mobile.remove(query,callback);
}