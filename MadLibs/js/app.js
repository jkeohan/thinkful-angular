var myapp = angular.module("myApp", [])
	
myapp.controller("wordCtrl", function($scope) {

	var newDefaults = [{ "placeholder": "male name"},{ "placeholder": "job title"}]
	$scope.newDefaults = newDefaults

	var nDefaults = [ 
		{ first: { placeholder: "male name"}, 
			second: { placeholder: "job title"},
			third: { placeholder: "task"}
		}]
	$scope.nDefaults = nDefaults 

 var defaults = {"malename":"male name","jobtit":"job ttle","tediuostask":"tediuos task"} ;
 $scope.defaults = defaults

} )

