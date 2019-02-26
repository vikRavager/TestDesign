var express = require('express');

var router = express.Router();

router.get('/',function(req,res){
        res.render('index');
});

router.get('/test1',function(req,res){
        res.render('test1');
});

router.get('/admin-registration',function(req,res){
        res.render('adminRegistration');
});

module.exports = router;