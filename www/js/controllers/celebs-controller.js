angular.module('celebeez.controllers', [])
.controller('CelebsCtrl',['$scope','Celebs', function($scope, Celebs) {
  Celebs.getList().then(function(celebs) {
	  $scope.celebs = celebs;
	})
}])