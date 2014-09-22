'use strict';

/**
 * @ngdoc function
 * @name thepelisApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the thepelisApp
 */
angular.module('thepelisApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
