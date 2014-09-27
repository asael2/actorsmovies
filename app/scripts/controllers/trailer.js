'use strict';

/**
 * @ngdoc function
 * @name thepelisApp.controller:TrailerCtrl
 * @description
 * # TrailerCtrl
 * Controller of the thepelisApp
 */

// Get movie info, example URL:
// https://api.themoviedb.org/3/movie/1850?api_key=7d01deb61b99198006a40696c46d3f29&append_to_response=trailers

angular.module('thepelisApp').controller('TrailerCtrl', function ($scope, $http, $routeParams) { 

	var movieId = $routeParams.movieId;
		
	$scope.getTrailer = function() {

		$http.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=7d01deb61b99198006a40696c46d3f29&append_to_response=trailers').success(function(data){
			console.log(data);
			$scope.code = data.trailers.youtube[0].source;
			$scope.title = data.title;
			$scope.overview = data.overview;
			$scope.website = data.homepage;	
		})

    };

});





