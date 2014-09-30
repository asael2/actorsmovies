'use strict';
angular.module('thepelisApp').controller('ActorCtrl', function ($scope, $http, $routeParams) {
  setfullBg('../images/background.jpg');
  
  var apiUrl = 'http://api.themoviedb.org/3/',
  actorId = $routeParams.actorId,
  apiKey = '?api_key=7d01deb61b99198006a40696c46d3f29&query=';

  $scope.fetchActorMovies = function() {
    $scope.actorName = $routeParams.actorName;
    $scope.orderByField = 'release_date';
    $scope.reverseSort = true;
    document.title = $scope.actorName;
      // API Request
      $http.get(apiUrl+'person/'+actorId+'/movie_credits'+apiKey+'&append_to_response=trailers').success(function(data){
        console.log(data);
        $scope.movies = data.cast;
      });
    };

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
