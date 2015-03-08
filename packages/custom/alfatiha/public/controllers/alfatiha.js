'use strict';

angular.module('mean.alfatiha').controller('AlfatihaController', ['$scope', '$http', 'Global', 'Alfatiha',
  function($scope, $http, Global, Alfatiha) {
    $scope.global = Global;
    $scope.package = {
      name: 'alfatiha'
    };
    $http.get('/alfatiha/assets/safha1.json').success(function(data) {
      $scope.alfatiha = data;
    });
  }
]);
