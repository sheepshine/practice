var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('login');
});

router.get('/', function(req, res, next) {
  res.render('login', { title: '登录登录登录登录登录登录登录登录' });
});

module.exports = router;
