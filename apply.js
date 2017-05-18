var app=angular.module("myApp",['ngRoute']);
app.config(["$locationProvider",function($locationProvider){
	$locationProvider.hashPrefix('')
}])

app.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/",{
		templateUrl:"Pages/home.html",
		controller:"myHomeController"
	})
	.when("/register",{
		templateUrl:"Pages/register.html",
		controller:"regController"
	})
	.when("/login",{
		templateUrl:"Pages/login.html",
		controller:"loginController"
	})
}])
app.run([function(){
	console.log("This is run section")
}])
app.controller("myHomeController",["$scope",function($scope){
	$scope.message="This is other section";
}])
app.controller("regController",["$scope",function($scope){
	$scope.message="this is reg page";
}])
app.controller("loginController",["$scope",function($scope){
	$scope.message="this is login page";
}])