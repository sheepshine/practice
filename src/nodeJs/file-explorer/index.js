var fs = require('fs');

function async(err,files){
	console.log(files)
}

fs.readdir(process.cwd(),function(err,files){
	console.log(process.env.NODE_ENV);

	if(!files.length){
		return console.log('没有此文件')
	}

	console.log('选择要显示的文件')

	function file(i){
		var filename=files[i];

		fs.stat(__dirname+'/'+filename,function(err,stat){
			if(stat.isDirectory()){
				console.log(i+""+filename)
			}else{
				console.log(i+""+filename)
			}
			i++;
			if(i==files.length){
				console.log('');
				process.stdout.write('选择文件')
				process.stdin.resume();
			}else{
				file(i)
			}
		})
	}

	file(0)
})