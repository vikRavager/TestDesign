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

router.get('/admin-dashboard',function(req,res){
        res.render('dashboard');
});


router.get('/list_of_problem',function(req,res){
        res.render('listOfProblem');
});



module.exports = router;