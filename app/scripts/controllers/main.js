'use strict';

/**
 * @ngdoc function
 * @name thepelisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thepelisApp
 */

// Search for actors, example URL:
// http://api.themoviedb.org/3/search/person?api_key=7d01deb61b99198006a40696c46d3f29&query=brad%20pitt

angular.module('thepelisApp').controller('MainCtrl', function ($scope, $http) {
	
	// bgSeter      ('../images/movies.jpg');
	setfullBg('../images/movies.jpg');
	
	var apiUrl = 'http://api.themoviedb.org/3/',
		mode = 'search/person',
		apiKey = '?api_key=7d01deb61b99198006a40696c46d3f29&query=';
		// Regex for input validation
		// letters = /^[A-Za-z]+$/; 

		$scope.fetchResults = function(e) {
			var ev = e;
			// console.log("evento= " + e.keyCode);
			//if ( (e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode == 8 || e.keyCode == 46 ) {

   			// if( $scope.searchTerm.match(letters) || ){
   			if( $scope.searchTerm !== "" &&  ev.keyCode !== 8 &&  ev.keyCode !== 46){

		    	$http.get(apiUrl+mode+apiKey+$scope.searchTerm+'&search_type=ngram').success(function(data){
		    		$scope.actors = data.results;
		    		console.log(data);
		    	})

			}
			else {
				$scope.actors = "";
			}
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





