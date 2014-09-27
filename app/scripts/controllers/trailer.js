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
			$scope.title = data.title;
			$scope.release_date = data.release_date;
			$scope.overview = data.overview;
			$scope.website = data.homepage;	
			$scope.backdrop_path = data.backdrop_path;
			$scope.hasTrailer = data.trailers.youtube.length;
			$scope.hasTrailer ? $scope.code = data.trailers.youtube[0].source : "";
			// Set order for backgrounds 
			if ($scope.backdrop_path) {
				$("body").css("background", 'url(http://image.tmdb.org/t/p/w396'+ $scope.backdrop_path +') ');
			}else{
				$("body").css("background", 'url(../images/background.jpg)');
			}
			$("body").css("background-repeat", 'no-repeat');
			$("body").css("background-size", 'cover');
		})

    };

});
