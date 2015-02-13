angular.module('celebeez.services', [])
.factory('Celebs',['Restangular', function(Restangular) {
  return Restangular.service('celebs');
}])