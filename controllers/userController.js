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
<<<<<<< HEAD
router.get('/Admin-viewstatement',function(req,res){
        res.render('AdminviewStatement');
=======
router.get('/view-Each-Applied',(req,res)=>{
        res.render('viewProblemKnowledgeContributor');
>>>>>>> 50e34d4ad40e1c2f534284fb2c6ac3058a25b28c
});
module.exports = router;