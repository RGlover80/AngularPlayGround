'use strict';

var MyApp = angular.module('MyApp', ['ui.bootstrap','ngRoute']);
      
MyApp.controller('AppCtrl', function ($scope) {
  $scope.stuff = 'World';
});

