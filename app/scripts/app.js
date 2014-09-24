'use strict';

/**
 * @ngdoc overview
 * @name thepelisApp
 * @description
 * # thepelisApp
 *
 * Main module of the application.
 */
angular
  .module('thepelisApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/actor/:actorId/:actorName?', {
        templateUrl: 'views/actor.html',
        controller: 'ActorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('a', function() { // This directive avoids redirection on hash "#" links.
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if(attrs.href === '#'){
                elem.on('click', function(e){
                    e.preventDefault();
                });
            }
        }
   };
}); ;
