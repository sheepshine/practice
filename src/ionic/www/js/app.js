var Todo=angular.module('todo',['ionic'])

Todo.controller('TodoCtrl',function($scope,$ionicModal){
	$scope.tasks=[
		{title:'菜鸟教程'},
		{title:'www.maonima.com'},
		{title:'菜鸟教程'},
		{title:'www.maonima.com'}
	];

	//创建并载入模型
	$ionicModal.fromTemplateUrl('new-task.html',function(modal){
		$scope.taskModal=modal;
	},{
		scope:$scope,
		animation:'slide-in-up'
	})

	//表单提交
	$scope.createTask=function(task){
		$scope.tasks.push({
			title:task.title
		});
		$scope.taskModal.hide();
		task.title=""
	}

	//打开新增的模型
	$scope.newTask=function(){
		$scope.taskModal.show();
	}

	//关闭新增的模型
	$scope.closeNewTask=function(){
		$scope.taskModal.hide();
	}
})