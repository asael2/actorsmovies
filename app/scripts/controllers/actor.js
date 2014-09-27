'use strict';
/**
 * @ngdoc function
 * @name thepelisApp.controller:ActorCtrl
 * @description
 * # ActorCtrl
 * Controller of the thepelisApp
 */
// Search for actor movies example URL 
// http://api.themoviedb.org/3/person/287/movie_credits?api_key=7d01deb61b99198006a40696c46d3f29
angular.module('thepelisApp').controller('ActorCtrl', function ($scope, $http, $routeParams) {

    var isHome = false, 
    	apiUrl = 'http://api.themoviedb.org/3/',
		mode = 'person',
		actorId = $routeParams.actorId,
		apiKey = '?api_key=7d01deb61b99198006a40696c46d3f29&query=';
  	
    $scope.fetchActorMovies = function(event) {
		$scope.actorName = $routeParams.actorName;
		$scope.orderByField = 'release_date';
  		$scope.reverseSort = true;
    	$http.get(apiUrl+'person/'+actorId+'/movie_credits'+apiKey+'&append_to_response=trailers').success(function(data){
    		$scope.movies = data.cast;
    		console.log(data);
    	}) 
    };

  });
