// Controller 1
angular.module('app').controller('firstCtrl', function($rootScope, $scope) {
	
	var data = 'origin first';
	
	// listeners
	$rootScope.$on('app-started', function(evt) {
		init();
	});
	
	$rootScope.$on('second-controller-updated', function(evt, data) {
		$scope.result = data;
	});
	
	// start the controller
	function init() {		
		$rootScope.$emit('first-controller-updated', data);
	}	
});