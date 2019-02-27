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

router.get('/AdmincreateOrEdit',function(req,res){
        res.render('AdmincreateOrEdit');
});
router.get('/knowledge-registration',function(req,res){
        res.render('knowledgeRegistration');
});
router.get('/knowledge-apply',function(req,res){
        res.render('knowledgeContributerListApplied');
});      
router.get('/knowledgeList-applied',function(req,res){
        res.render('knowledgeContributerListOfProblemApplied');
}); 
 router.get('/Admin-viewstatement',function(req,res){
       res.render('AdminviewStatement');
});
router.get('/finance-registration',function(req,res){
        res.render('financeRegistration');
});
router.get('/developer-registration',function(req,res){
        res.render('developerRegistration');
});
module.exports = router;