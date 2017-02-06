var blog=require('./db').Blog;


exports.add=function(title){
	var doc = {
		"id":1, 
		"title":title, 
		"body":".愛 情 使 人 忘 記 時 間 　時 間 也 使 人 忘 記 愛 情",
		"published":"6/2/2013"
	};
	blog.create(doc, function(error){
	    if(error) {
	        console.log(error);
	    } else {
	        console.log('save ok');
	    }
	});
}
