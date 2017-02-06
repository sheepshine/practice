module.exports=function(app){
	app.get('',function(req,res){
		res.send('Hello world')
	})

	app.get('/hehe',function(req,res){
		res.send('HeHe')
	})
}