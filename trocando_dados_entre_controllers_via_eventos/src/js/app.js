angular.module('app', []);

// Controller 1
angular.module('app').controller('appCtrl', function($rootScope, $scope) {
	
	// start the app
	$scope.init = function(){
		$rootScope.$emit('app-started');
	}	
});