/**
 * Created by chottinger on 12/9/15.
 */
var app = angular.module('theBest', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: '/pages/home.html',
    controller: 'homeCtrl'
  }).when('/wishlist', {
    templateUrl: '/pages/wishlist.html',
    controller: 'wishCtrl'
  });
}]);

app.controller('homeCtrl', ['$scope', '$http', function($scope, $http){
  $http({
    url: '/channels',
    method: 'get'
  }).then(function(response){
    $scope.channellist = response.data;
    $scope.whatever = 2;
  });
}]);

app.controller('wishCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.channel = {};

  $scope.submit = function() {
    $http({
      url: '/wishlist',
      method: 'post',
      data: $scope.channel
    })
  };
}]);




