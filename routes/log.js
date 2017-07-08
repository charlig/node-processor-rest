var mongojs = require('mongojs');
var express = require('express');
var router = express.Router();
var Mobilelog = require("../models/mobilelog");


router.post('/mobile', (req, res) => {
    

    console.log(req.body.length);
    var jsonData = req.body;
    for (i = 0; i <jsonData.length; i++) {
        var log = new Mobilelog();
        log.phone = jsonData[i].phone;
        log.callType = jsonData[i].callType;
        log.callDate = jsonData[i].callDate;
        log.callDuration = jsonData[i].callDuration;
        log.save(function (err) {
            if (err) throw err;
        });
    };

    res.send('success')
})

router.delete('/mobile/:id', (req, res) => {
    // var log = new Mobilelog();
    var response = "";

    // Mobilelog.getOneUserById(req.params.id,function(err,log){
    //         console.log(log.phone);
    //         res.send(log.phone)
    // });
    Mobilelog.removeLogById(req.params.id, function (err) {
        res.send(err)
    })


    // log.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, todo) => {
    //     console.log("delete");
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.send(todo);
    // });



})

router.delete('/mobile', (req, res) => {
    Mobilelog.removeAll(function (err) {
        if (err) res.send(err)
    })
    res.send('204');
});

module.exports = router;
