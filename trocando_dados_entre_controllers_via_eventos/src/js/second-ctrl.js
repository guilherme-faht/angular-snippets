// Controller 2
angular.module('app').controller('secondCtrl', function($rootScope, $scope) {
	
	var data = 'origin second';
	
	// listeners
	$rootScope.$on('app-started', function(evt) {
		init();
	});
	
	$rootScope.$on('first-controller-updated', function(evt, data) {
		$scope.result = data;
	});
	
	// start the controller
	function init() {
		$rootScope.$emit('second-controller-updated', data);
	}	
});
