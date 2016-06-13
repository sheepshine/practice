var http = require("http"); 
var url =require("url");

function start(route,handle){
	function onRequest(request, response){ 
		// var pathname=url.parse(request.url).pathname;
		// console.log(pathname,111)
		// route(handle,pathname,response);

		var postData='';
		var pathname=url.parse(request.url).pathname;

		request.setEncoding('utf-8');

		request.addListener('data',function(postDataChunk){
			postData+=postDataChunk;
			console.log(postDataChunk);
		})

		request.addListener('end',function(){
			route(handle,pathname,response,postData)
		})
	} 

	http.createServer(onRequest).listen(8888); 
	console.log("Server has started.");

}

exports.start=start;
