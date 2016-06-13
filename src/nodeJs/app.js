var http=require('http');
var fs=require('fs');
var myModule=require('./module.js');
var somePackage=require('./somepackage');
somePackage.hello();

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<h1>111122222</h1>');
	res.end('<p>2221112122122</p>')
}).listen(3000);

console.log('本地3000运行……');

fs.readFile('file.txt','utf-8',function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
})

console.log('end');

myModule.setName('Sheepshine');
myModule.sayHello();