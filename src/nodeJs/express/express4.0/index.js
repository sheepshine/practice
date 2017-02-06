var express=require('express');
var http=require('http');
var app=express();
//var routes=require('./route')(app);

app.use(express.static(__dirname+'/public'));


// app.use(function(request,response,next){
// 	console.log(request.method,1111);
// 	if(request.url=='/'){
// 		response.writeHead(200,{'Content-Type':'text/plain'})
// 		response.end('欢迎来到主页');
// 	}else{
// 		next();
// 	}
	
// })

app.all('*',function(request,response,next){
	response.writeHead(200,{'Content-Type':'text/plain'})
	next();
})

app.all('/',function(request,response,next){
	response.end('index');
	console.log(request.ip);
	
	
})
// app.use(function(request,response,next){
// 	if(request.url=='/about'){
// 		response.writeHead(200,{'Content-Type':'text/plain'})
// 		response.end('欢迎来到信息页');
// 	}else{
// 		next();
// 	}
// })

app.get('/about',function(request,response,next){
		response.end('about');
})

app.get('/hello/:who?',function(request,response,next){
		if(request.params.who){
			response.end('hello '+request.params.who);
		}else{
			response.end('hello,Guest');
		}
		
})

app.use(function(request,response){
	response.writeHead(404, { "Content-Type": "text/plain" });
  	response.end("404 error!\n");
	//response.redirect("http://www.baidu.com");
})

http.createServer(app).listen(8080)