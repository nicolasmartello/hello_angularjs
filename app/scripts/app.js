'use strict';
angular.module('APP',[]).
  config(function ($routeProvider){
    $routeProvider
    .when('/',{templateUrl:'app/views/home.html', controller:'homeController'})
    .when('/videos',{ templateUrl: 'app/views/video.html', controller:'videoController'})    
    .otherwise({templateUrl: 'app/views/home.html'})
  }).
  controller('homeController',['$scope', function ($scope){
  	activeMenu('home');
  }]).
  controller('videoController',['$scope', function ( $scope){
	activeMenu('video');
  }]);

  function activeMenu(idLi){
  	$('#menu li').removeClass('active');
  	$('#'+idLi).addClass('active');
  }