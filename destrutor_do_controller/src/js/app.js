angular.module('app', ['ngRoute']);


angular.module('app').config(function($routeProvider) {
	
	$routeProvider
	.when('/page-one', {
		templateUrl: 'src/partial/page-one.html',
		controller: 'PageOneCtrl'
	})
	.when('/page-two', {
		templateUrl: 'src/partial/page-two.html',
		controller: 'PageTwoCtrl'
	});
});

// Page One Controller 
angular.module('app').controller('PageOneCtrl', function($scope) {
	
	$scope.$on('$destroy', function(event){
		alert('PageOneCtrl Destruído!');
	});
});

// Page Two Controller 
angular.module('app').controller('PageTwoCtrl', function($scope) {
	
	$scope.$on('$destroy', function(event){
		alert('PageTwoCtrl Destruído!');
	});
});