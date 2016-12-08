angular.module('app', []);

// Parent Controller
angular.module('app').controller('parentCtrl', function($rootScope, $scope) {
	
	var 
		reg2, reg3;
		
	$scope.reg1 = [];
	
	// listeners	
	reg2 = $rootScope.$on('register', function(evt) {
		register();
	});
	
	reg3 = $rootScope.$on('deregister', function(evt) {
		
		if($scope.reg1.length > 0){
			$scope.reg1[0]();
			$scope.reg1.splice(0,1);
			alert('Deregister first event');
		}
		
	});
	
	function register() {
		
		var size = $scope.reg1.length;
		
		var aux = $rootScope.$on('click', function(evt) {
			alert('Click Event ' + (size + 1));
		});
		
		$scope.reg1.push(aux);
	}

	register();
});

// Child Controller 
angular.module('app').controller('childCtrl', function($rootScope, $scope) {
		
	$scope.emitEvent = function() {
		$rootScope.$emit('click');
	}
	
	$scope.registerEvent = function() {
		$rootScope.$emit('register');
	}
	
	$scope.deregisterEvent = function() {
		$rootScope.$emit('deregister');
	}
	
});