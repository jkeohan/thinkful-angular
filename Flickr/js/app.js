var myApp = angular.module("myApp", []);
'use strict';
myApp.controller('flickrCtrl', ['$scope', function($scope){ 

	$scope.searching = false;
	$scope.results = false;

	$scope.submit = function() { 
		$scope.searchQueryCopy = $scope.searchQuery
		$scope.searching = true;
		$scope.searchQuery = " ";
	}
}]);

