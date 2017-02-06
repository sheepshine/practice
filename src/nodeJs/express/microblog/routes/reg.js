var express = require('express');
var router = express.Router();
var flash = require('connect-flash')
/* GET users listing. */
router.post('/', function(req, res, next) {


  //res.send('reg');
  if(req.body['password-repeat']!=req.body['password']){
    req.session('error','两次密码不一致');
    return res.redirect('reg');
  }
  var password = req.body.password;
  var newUser = new User({
    name: req.body.username,
    password: password,
   });

  //检查用户名是否已经存在
  User.get(newUser.name,function(err,user){
    if (user)
        err = 'Username already exists.';
    if (err) {
        req.session('error', err);
        return res.redirect('/reg');
    }

    //不存在就新增
    newUser.save(function(err) {
        if (err) {
            req.session('error', err);
            return res.redirect('/reg');
        }
        req.session.user = newUser;
        req.session('success', '注册成功');
        res.redirect('/');
    });
  })
});

router.get('/', function(req, res, next) {
  res.render('reg', { title: '注册注册注册注册注册注册' });
});

module.exports = router;
