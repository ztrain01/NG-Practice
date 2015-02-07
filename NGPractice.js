var app = angular.module('myApp');

app.controller('MainController', function($scope){
  $scope.users= [];
  $scope.addUser= function(){
    console.log($scope.newUser);
    $scope.users.push($scope.newUser);
    $scope.newUser = {};
  }
  
});