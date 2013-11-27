'use strict';
angular.module('APP',[]).
  config(function ($routeProvider){
    $routeProvider.
    when('/',{ templateUrl: 'views/home.html'})
  })