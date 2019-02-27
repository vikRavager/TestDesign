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
        res.render('adminDashboard');
});



router.get('/admin-listofproblem',function(req,res){
        res.render('adminListOfProblem');
});

router.get('/knowledge-contributor-dashboard',function(req,res){
        res.render('knowledgeContributorDashboard');

});
router.get('/knowledge-contributor-listofproblem',function(req,res){
        res.render('knowledgeContributorListOfProblem');
});




module.exports = router;