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
<<<<<<< HEAD
router.get('/createOrEdit',function(req,res){
        res.render('createOrEdit');
});
router.get('/knowledge-registration',function(req,res){
        res.render('knowledgeRegistration');
});
router.get('/apply',function(req,res){
        res.render('apply');
});       
=======

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

router.get('/view-problem-statement',function(req,res){
        res.render('viewProblemKnowledgeContributor');
});




>>>>>>> ce074e0e4347db741a7c7c9e76f17f6b7eeb1f10
module.exports = router;