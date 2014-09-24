'use strict';

/**
 * @ngdoc function
 * @name thepelisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thepelisApp
 */
angular.module('thepelisApp').controller('MainCtrl', function ($scope, $http) {

	var apiUrl = 'http://api.themoviedb.org/3/',
		mode = 'search/multi',
		apiKey = '?api_key=7d01deb61b99198006a40696c46d3f29&query=';

    $scope.fetchData = function() {
    	$http.get(apiUrl+mode+apiKey+$scope.searchTerm).success(function(data){
    		console.log(data);
    		$scope.pelis = data.results;
    	})
       
    }
});
