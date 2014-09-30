'use strict';
angular.module('thepelisApp').controller('MainCtrl', function ($scope, $http) {
	$('#searchBox').focus();
	//Set Background in Home
	setfullBg('../images/movies.jpg');
	document.title = 'The Pelis';
	var apiUrl = 'http://api.themoviedb.org/3/',
		mode = 'search/person',
		apiKey = '?api_key=7d01deb61b99198006a40696c46d3f29&query=';		
		
	$scope.fetchResults = function() {
		if( $scope.searchTerm !== '' ){
	    	$http.get(apiUrl+mode+apiKey+$scope.searchTerm+'&search_type=ngram').success(function(data){
	    		$scope.actors = data.results;
	    		console.log(data);
	    	});
		}else {
			$scope.actors = '';
		}
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
