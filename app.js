var app=angular.module("myApplication",[])
app.controller("myController",["$scope",function($scope){
	$scope.message="Hello Angular";
	$scope.fruitList=[
		{name:'Mango',color:'yellow',quantity:3},
		{name:'orange',color:'orange',quantity:2},
		{name:'Apple',color:'Red',quantity:5}
	]
}])