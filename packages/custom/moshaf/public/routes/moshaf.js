'use strict';

angular.module('mean.moshaf').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('moshaf', {
      url: '/moshaf',
      templateUrl: 'moshaf/views/moshaf.html'
    }).state('safha', {
      url: '/moshaf/:rakmSafha',
      templateUrl: 'moshaf/views/moshaf.html'
    }).state('aya', {
      url: '/aya/:rakm',
      templateUrl: 'moshaf/views/aya.html',
      controller: 'MoshafController'
    });
  }
]);
