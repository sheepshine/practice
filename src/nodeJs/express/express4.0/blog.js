// blog.js文件

var blog=require('./db').Blog;
var entries=[];


// var entries = [
//     {"id":1, "title":"第一篇", "body":".愛 情 使 人 忘 記 時 間 　時 間 也 使 人 忘 記 愛 情", "published":"6/2/2013"},
//     {"id":2, "title":"第二篇", "body":"在╁愛情☆℡ǐ 的遊戲裏，總有 .︵壹個主角和壹個配角，累的是主角，傷的永遠是配角。", "published":"6/3/2013"},
//     {"id":3, "title":"第三篇", "body":"莪抧媞壹箇普通啲钕苼，竾姷嗻臫魢緗葽啲普通苼獲", "published":"6/4/2013"},
//     {"id":4, "title":"第四篇", "body":"niubiniubiniubiniubiniubi", "published":"6/5/2013"},
//     {"id":5, "title":"第五篇", "body":"haohaohaohaohaohaohaohaohaohaohaohao", "published":"6/10/2013"},
//     {"id":6, "title":"第六篇", "body":"呵呵额呵呵", "published":"6/12/2013"}
// ];

exports.getBlogEntries = function (){
    blog.find({}, function (err,users) {  
       entries=users; 
    }); 
   return entries;
}
 
exports.getBlogEntry = function (id){
   for(var i=0; i < entries.length; i++){
      if(entries[i].id == id) return entries[i];
   }
}