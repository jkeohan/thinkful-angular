var myApp = angular.module("myApp", []);

myApp.controller('flickrCtrl', ['$scope','$http',function($scope,$http){ 
	'use strict';
	$scope.searchMsg = false;
	$scope.resultMsg = false;

	$scope.submit = function() { 
		$scope.searchQueryCopy = $scope.searchQuery;
		$scope.resultMsg = false;
		$scope.searchMsg = true;

		$scope.searchQuery = ' ';
		var url = "https://api.flickr.com/services/rest";
		var request = {
	    method: 'flickr.photos.search',
	    api_key: '1f248d8314f6e79c501fdb818513f0ff',
	    tags: $scope.searchQueryCopy,
	    format: 'json',
	    jsoncallback: 'JSON_CALLBACK'
	    // nojsoncallback: '1'
		}
 
       $http({
		      method: 'JSONP',
		      url: url,
		      params: request
		    })
       .then(function(result) {
       		$scope.searchMsg = false;
       		$scope.resultsMsg = true;
		      $scope.result = result.data.photos.photo
		      console.log($scope.result.length)
		      $scope.results = $scope.result.length

		    },
		    function(result) {
		      alert('error');
		    });
          
		// 'https://farm{farmId}.staticflickr.com/{serverId}/{id}_{secret}.jpg'
		//http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
			// https://farm2.staticflickr.com/1456/25022884939_c284ab498f.(jpg|gif|png)
			//This works...
			//https://farm2.staticflickr.com/1456/25022884939_c284ab498f.jpg
	}
}]);

// https://api.flickr.com/services/rest/
// ?format=json
// &method=flickr.photos.search
// &tags=dog
// &api_key=1f248d8314f6e79c501fdb818513f0ff
// &nojsoncallback=1

// id: "25022884939",
// owner: "43046057@N05",
// secret: "c284ab498f",
// server: "1456",
// farm: 2,
// title: "Doggy Heaven",
// ispublic: 1,
// isfriend: 0,
// isfamily: 0

// ISSUE: Cannot read property of jsonp
// RESOLUTION: Removed the jsonp from $http.jsonp and then updated code to use thinkfuls $http request format. 

//ISSUE: resultsMsg not changing until after promise which means both msgs are being displayed.  Only happens on 
//       running a subsequent query
//RESOLUTION: 
