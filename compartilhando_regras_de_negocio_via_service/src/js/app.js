angular.module('app', []);

angular.module('app').factory('fruitService', function() {
	
	var fruits = ['Orange', 'Apple', 'Lemon'];

	return {
		allFruits: function() {
			return fruits;
		},
		count: function() {
			return fruits.length;
		}
	};
});

angular.module('app').controller('firstCtrl', function($scope, fruitService) {
	
	$scope.result = fruitService.allFruits();
});

angular.module('app').controller('secondCtrl', function($scope, fruitService) {
	
	$scope.result = fruitService.count();
});
