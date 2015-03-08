'use strict';
//service used REST endpoint
angular.module('mean.moshaf')
    .factory('Moshaf', ['$resource',
        function($resource) {
            return $resource('moshaf/:rakmSafha', {}, {
                get: {
                    method: "GET",
                    cache: true
                }
            });
        }
    ]).factory('Ayat', function() {
        return {
            kabla: function(input) {
                var i = input.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function(d) {
                    return d.charCodeAt(0) - 1632;
                });
                i = Number(i)+1;
                if(i===0){i=1}
                var id= ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
                i= String(i).replace(/[0-9]/g, function(w){
                    return id[+w];
                });
                return  i;
            }
        };
    });
