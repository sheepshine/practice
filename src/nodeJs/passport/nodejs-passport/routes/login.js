var express = require('express');
var router = express.Router();
var passport = require('passport'), 
    LocalStrategy = require('passport-local').Strategy;
router.get('/', function(req, res) {
  	var html = "<h2>你好</h2>";
    res.send(html);
});

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/'
    }));



module.exports = router;