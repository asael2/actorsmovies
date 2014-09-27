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
      .when('/trailer/:movieId/:actorName?', {
        templateUrl: 'views/trailer.html',
        controller: 'TrailerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).directive('a', function() {  // This directive avoids redirection on hash "#" links.
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
  }).directive('myYoutube', function($sce) {
    return {
      restrict: 'EA',
      scope: { code:'=' },
      replace: true,
      template: '<div style="height:360px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
      link: function (scope) {
        scope.$watch('code', function (newVal) {
          if (newVal) {
            scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal + "?hd=1&rel=0&autohide=1&showinfo=0&autoplay=1");
          }
        });
      }
    };
});
