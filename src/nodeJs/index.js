var server=require('./server');
var router=require('./route');
var requestsHandlers=require('./requestHandlers');

var handle={};
handle["/"]=requestsHandlers.start;
handle["/start"]=requestsHandlers.start;
handle["/upload"]=requestsHandlers.upload;

server.start(router.route,handle);