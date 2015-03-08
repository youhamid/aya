'use strict';

angular.module('mean.moshaf', ['ngSanitize']).controller('MoshafController', ['$scope', '$stateParams', 'Global', 'Moshaf',
  function($scope, $stateParams, Global, Moshaf) {
    $scope.global = Global;

    $scope.findOne = function() {
      Moshaf.get({
        rakmSafha: $scope.rakmSafha//$stateParams.rakmSafha
      }, function(safha) {
        $scope.safha = safha;
      });
    };
    
     $scope.find = function() {
       Moshaf.query(function(safha) {
         $scope.safhas = safha;
       });
     };
     
      $scope.rakm = $stateParams.rakm;
  }
])
.filter('rakmaya', function() {
    return function(input) {
      input = input || '';
      var out = "";
      out = input.replace(/([٠١٢٣٤٥٦٧٨٩]{1,3})/g, '<span class="badge"> <a href="#!/aya/$1" > $1 </a> </span>')
      return out;
    };
  })
  .filter('rakmaya1', function() {
    return function(input) {
      input = input || '';
      var out = "";
      out = input.replace(/([٠١٢٣٤٥٦٧٨٩]{1,3})/g, '<span class="badge"> <a href="#!/aya/$1" > $1 </a> </span>')
      return out;
    };
  })
.filter('aya', ['Ayat',function(Ayat) {
    return function(input,rakm) {
      input = input || '';
      rakm = " " + rakm + " ";
      var ayat = Ayat;
      var i = ayat.kabla(rakm);
      i = " " + i + " ";
      var j = input.search(rakm);
      var k = input.search(i);
      var out = input.slice(j,k+i.length);
      return out;
    };
  }]);
