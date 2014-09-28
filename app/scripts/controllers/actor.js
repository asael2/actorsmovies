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
  
    var apiUrl = 'http://api.themoviedb.org/3/',
		actorId = $routeParams.actorId,
		apiKey = '?api_key=7d01deb61b99198006a40696c46d3f29&query=';

    setfullBg('../images/background.jpg');
    $scope.fetchActorMovies = function(event) {
  		$scope.actorName = $routeParams.actorName;
  		$scope.orderByField = 'release_date';
    	$scope.reverseSort = true;
      // API Request
      $http.get(apiUrl+'person/'+actorId+'/movie_credits'+apiKey+'&append_to_response=trailers').success(function(data){
    		console.log(data);
        document.title = $scope.actorName;
        $scope.movies = data.cast;
    	}) 
    };
  
  function setfullBg(bgUrlImg){
    $("body").css('background', 'url('+bgUrlImg+')');
    $("body").css("background-size", 'cover'); 
    $("body").css("background-repeat", 'no-repeat'); 
    $("body").css("background-attachment", 'fixed'); 
    $("body").css('-webkit-background-size', 'cover');
    $("body").css('-moz-background-size', 'cover');
    $("body").css('-o-background-size', 'cover');
  }
  });
