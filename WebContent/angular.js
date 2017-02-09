var app = angular.module("smcb6", []);
var url = '/angular/WebContent/index.html';

app.controller('indexCtrl', function($scope, $http) {
	  $http({
	    method : "GET",
	    url : "index.html"
	  }).then(function mySucces(response) {
	      
	    }, function myError(response) {
	      $scope.test = "Request Failed";
	  });
	});