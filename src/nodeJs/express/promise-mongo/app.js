var express = require('express');
var path = require('path');
var http=require('http');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');
var db=mongoose.connection;

db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',function(callback){

})

var testSchema=mongoose.Schema({
    name:String
})


testSchema.methods.speak=function(){
    console.log('hello, my name is '+this.name);
}

var sheepshine=mongoose.model('sheepshine',testSchema);

var ycb=new sheepshine({name:'yangchaoben'});

mjw=new sheepshine({name:'maojiawei'})
mjw.save(function(err,ycb){
    if(err){
        return console.error(err);
    }
    mjw.speak();
})

ycb.save(function(err,ycb){
    if(err){
        return console.error(err);
    }
    ycb.speak();
})

// sheepshine.find(function(err,ycb){
//     if(err){
//         return console.error(err);
//     }
//     console.log(ycb)
// })

mongoose.Promise = global.Promise;

var promise=sheepshine.find({name:'yangchaoben'}).exec();

promise.then(function(result){
    console.log(result);
    // console.log(resutl)
    return promise=sheepshine.find({name:'maojiawei'}).exec();

},function(err){
    console.log(err)
}).then(function(resutl){
    console.log(resutl)
    
},function(err){
    console.log(err)
})

var app = express();

var MongoStore=require('connect-mongo');
var settings=require('./setting');

var pmongo = require('promised-mongo');



// var db = pmongo('ycb');
// var mycollection = db.collection('user');

// db.mycollection.find().then(function(docs){
//   console.log(docs.username)
// });




// app.set(function(){
//   app.set('views', __dirname + '/views');
//   app.set('view engine', 'ejs');
//   app.use(express.bodyParser());
//   app.use(express.methodOverride());
//   app.use(express.cookieParser());
//   app.use(express.session({
//   secret: settings.cookieSecret,
//   store: new MongoStore({
//     db: settings.db
//   })
//   }));
//   app.use(app.router);
//   app.use(express.static(__dirname + '/public'));
// });

// app.get('/',function(req,res){
//   res.send('111')
// })

// http.createServer(app).listen(8080)