var myApp = angular.module('myApp', [])
//phase 1
// myApp.controller('MultiplicationCtrl', function($scope) {
//         $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     });

//phase 2
myApp
// .controller('MultiplicationCtrl', function($scope, $attrs) {
//         $scope.numberLimit = $attrs.initialNumberLimit || 10;

//         $scope.numbers = function() {
//             var numbers = [];
//             for(var i=0; i<$scope.numberLimit; i++) {
//                 numbers[i] = i + 1;
//             };
//             return numbers;
//         };

//         $scope.compute = function(a,b) { return a*b }
//     });


.controller('MultiplicationCtrl', function($scope, $attrs) {
  $scope.numberLimit = $attrs.initialNumberLimit || 10;
	$scope.numbers = function() {
		var numbers = [];
		for(var i=0; i<$scope.numberLimit; i++) {
      numbers[i] = i + 1;
     }
     return numbers;
	};
  

	$scope.compute = function(a,b) {
    return a * b;
  };
  
  
});
