'use strict';

angular.module('mean.alfatiha').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('alfatiha example page', {
      url: '/alfatiha/example',
      templateUrl: 'alfatiha/views/index.html'
    });
    
     $stateProvider.state('alfatiha', {
      url: '/alfatiha',
      templateUrl: 'alfatiha/views/alfatiha.html'
    });
  }
]);
