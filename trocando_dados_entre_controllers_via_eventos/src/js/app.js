angular.module('app', []);

angular.module('app').controller('firstCtrl', function($rootScope, $scope) {
	
	var data = 'origin first';
	
	$rootScope.$on('second-controller-update', function(evt, data) {
		$scope.result = data;
	});
	
	$rootScope.$emit('first-controller-updated', data);
	
});

angular.module('app').controller('secondCtrl', function($rootScope, $scope) {
	
	var data = 'origin second';
	
	$rootScope.$on('first-controller-update', function(evt, data) {
		$scope.result = data;
	});
	
	$rootScope.$emit('second-controller-updated', data);
});
