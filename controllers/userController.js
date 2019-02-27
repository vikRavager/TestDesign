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
router.get('/createOrEdit',function(req,res){
        res.render('createOrEdit');
});
router.get('/knowledge-registration',function(req,res){
        res.render('knowledgeRegistration');
});
router.get('/apply',function(req,res){
        res.render('apply');
});       
module.exports = router;