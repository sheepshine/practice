var express=require('express');
var app=express();
var api=require('./route/api');
var hbs=require('hbs');
var blogEngine=require('./blog');
var add=require('./add');



app.set('port',process.env.PORT||8080);

app.set('info1',111);


app.set('view engine','html');

app.engine('html',hbs.__express);
//app.use(express.bodyParser());


app.use(express.static(__dirname+'/public'));

app.listen(app.get('port'));

app.get('/api',api.index)

app.get('',function(req,res){
	res.render('index',{
		title:"最近文章",
		entries:blogEngine.getBlogEntries()
	});
})
app.get('/about',function(req,res){
	res.render('article',{title:'关于本站'});
})

app.get('/add',function(req,res){
	res.render('add',{title:'新增文章'});
})

app.get('/add/add:title?',function(req,res){
	console.log(req.params.title)
	//var val = req.query.name;
	add.add(req.params.title);
	res.send('发布')
	
})

app.get('/article/:id',function(req,res){
	var entry=blogEngine.getBlogEntry(req.params.id);
	res.render('article',{title:entry.title, blog:entry});
})

console.log(app.get('info1'))