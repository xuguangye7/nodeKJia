var express = require('express');
var router = express.Router();

const {chapterList} = require('./data.json');
router.use(express.static('routes'));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function(req,res){
    res.type("text/html");
    res.status(200);
    res.sendfile(__dirname+"/login.html");
});
router.get('/listmanager',function(req,res){
    if(req.query.username=="zhangsan"&&req.query.pwd=='123456'){
        res.type("text/html");
        res.status(200);
        res.sendfile(__dirname+"/list.html");  
    }else{
        res.send("登录失败,用户名密码错误");
    }
});
router.get('/a',function(req,res){
    res.send(chapterList);
});


module.exports = router;





