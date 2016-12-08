angular.module('app', ['ngRoute']);

// App Controller 
angular.module('app').controller('AppCtrl', function($scope, $http) {
		
	$http({
		method: 'GET',
		url: 'src/img/image.png',
		responseType: 'arraybuffer'
	}).then(function(response) {
		$scope.image = toBase64(response.data);		
	}, function(response) {
		console.error(resposnse);
	});

	function toBase64(buffer) {
		
		var 
			binary = '',
			bytes = new Uint8Array(buffer),
			len = bytes.byteLength;
		
		for (var i = 0; i < len; i++) {
			binary += String.fromCharCode(bytes[i]);
		}
	
		return window.btoa(binary);
	}
	
});