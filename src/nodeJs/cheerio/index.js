var http = require('http'),
	fs = require('fs'),
	request= require('request'),
	cheerio = require('cheerio'),
	url = "http://dig.chouti.com/";

	function startRequest(url){
		http.get(url,function(res){
			var html="",
				titles=[];

			res.setEncoding("utf-8");

			res.on('data',function(chunk){
				html+=chunk;
			})

			res.on("end",function(){
				var $=cheerio.load(html);
				$(".news-content").find(".show-content").each(function(i){
					var title=$(this).text().replace(/\t/g,"");
					saveContent(i,title)
				})
				
				$(".content-list").find(".news-pic").find("img").each(function(i){
					var img=$(this).attr("original");
					saveImg(i,img)
				})
			})

		})
	}

	function saveContent(index,news_title){
		fs.appendFile('./data/' + index + '.txt', news_title, 'utf-8', function (err) {
            if (err) {
                console.log(err);
            }
        });
	}

	function saveImg(index,news_img){
		console.log(news_img)
		request.head(news_img,function(err,res,body){
			if(err){
				console.log(err)
			}
		})
		request(news_img).pipe(fs.createWriteStream('./image/'+index + '.jpg'));
	}
	startRequest(url)