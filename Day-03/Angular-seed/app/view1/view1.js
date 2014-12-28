'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.factory("greetService", function(){
	return {
		getGreetMsg : function(name){
			return "Hi " + name;
		}
	}
})

.controller('View1Ctrl', function($scope, greetService) {
	$scope.name = '';
	$scope.greet = function(){
		$scope.greetMsg = greetService.getGreetMsg($scope.name);
	}
});