// angular.module('OWMApp', ['ngRoute']);
// angular.module('OWMApp', ['ui.router'] );

// angular.module('OWMApp', ['ui.router'])
//     .config(['$routeProvider', function($routeProvider){
//         $routeProvider.when('/', {
//             templateUrl : 'home.html',
//             controller : 'HomeCtrl'
//         });
//     }])
//     .controller('HomeCtrl', function($scope) {
//         //empty for now
//     });

var OWMApp = angular.module('OWMApp', ['ui.router'])
OWMApp.config(function($stateProvider, $urlRouterProvider) {
  'use strict'
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/state1');
  // Now set up the states
  $stateProvider//this is a service
  	.state('/', {
  		url: "/",
  		templateUrl: "home.url"
      //abstract: true //tells it to be a parent template
  	})
    .state('state1', {
      url: "/state1",
      templateUrl: "home.html"
    })
    .state('city', {
      // url: "cities:city",
      url: "/city",
      templateUrl: "city.html",
      controller: 'CityCtrl'
    })
});

OWMApp.controller('HomeCtrl', function($scope) {
        //empty for now
    })

OWMApp.controller('CityCtrl',['$scope', '$routeParams', function($scope,$routeParams) {
        $scope.city = 'New York';
        // console.log($routeParams)
        // $scope.city = $routeParams.city;
    }]);

OWMApp.controller('CityCtrl',['$scope', '$routeParams', function($scope,$routeParams) {
        $scope.city = 'New York';
        // console.log($routeParams)
        // $scope.city = $routeParams.city;
    }]);












