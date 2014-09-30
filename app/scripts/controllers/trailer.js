'use strict';
angular.module('thepelisApp').controller('TrailerCtrl', function ($scope, $http, $routeParams) { 
	// $scope.isLoading = true;
	$scope.backBtn = function(){
		window.history.back();
	};
	var movieId = $routeParams.movieId;
	// var actorName = $routeParams.actorName;

	$scope.getTrailer = function() {

		$http.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=7d01deb61b99198006a40696c46d3f29&append_to_response=trailers,credits').success(function(data){
			console.log(data);
			$scope.title = data.title;
			$scope.release_date = data.release_date;
			$scope.overview = data.overview;
			$scope.website = data.homepage;	
			$scope.backdrop_path = data.backdrop_path;
			$scope.hasTrailer = data.trailers.youtube.length;
			$scope.hasTrailer ? $scope.code = data.trailers.youtube[0].source : '';
			$scope.cast = data.credits.cast;
			// Set load order for backgrounds 
			$scope.backdrop_path ? setfullBg('http://image.tmdb.org/t/p/w396'+$scope.backdrop_path) : setfullBg('../images/background.jpg');	
			// $scope.isLoading = false;
		});
    };

    // $scope.fetchCastActorMovies = function(actorId) {
    // // $scope.actorName = $routeParams.actorName;

    //   // API Request
    //   $http.get(apiUrl+'person/'+actorId+'/movie_credits'+apiKey+'&append_to_response=trailers').success(function(data){
    //     console.log(data);
    //     $scope.movies = data.cast;
    //   });
    // };

    function setfullBg(bgUrlImg){
		$('body').css('background', 'url('+bgUrlImg+')');
		$('body').css('background-size', 'cover'); 
		$('body').css('background-repeat', 'no-repeat'); 
		$('body').css('background-attachment', 'fixed'); 
		$('body').css('-webkit-background-size', 'cover');
		$('body').css('-moz-background-size', 'cover');
		$('body').css('-o-background-size', 'cover');
	}

});