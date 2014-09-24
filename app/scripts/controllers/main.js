'use strict';

/**
 * @ngdoc function
 * @name thepelisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thepelisApp
 */

// Search for actors, example URL
// http://api.themoviedb.org/3/search/person?api_key=7d01deb61b99198006a40696c46d3f29&query=brad%20pitt

angular.module('thepelisApp').controller('MainCtrl', function ($scope, $http) {
	var isHome = true;
	var apiUrl = 'http://api.themoviedb.org/3/',
		mode = 'search/person',
		apiKey = '?api_key=7d01deb61b99198006a40696c46d3f29&query=';
		
		$scope.fetchResults = function(event) {
	    	$http.get(apiUrl+mode+apiKey+$scope.searchTerm+'&search_type=ngram').success(function(data){
	    		console.log(data);
	    		$scope.actors = data.results;
	    	}) 
	    };
});
