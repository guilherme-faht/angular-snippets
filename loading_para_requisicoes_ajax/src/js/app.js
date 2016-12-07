angular.module('app', []);

angular.module('app').config(function ($httpProvider) {
  
    $httpProvider.responseInterceptors.push('httpInterceptor');

    var spinnerFunction = function loadingFunction(data, headersGetter) {
        $("#spinner").show();
        return data;
    };

    $httpProvider.defaults.transformRequest.push(loadingFunction);
});

angular.module('app').factory('httpInterceptor', function ($q, $window) {
    return function (promise) {
        return promise.then(function (response) {
            $("#spinner").hide();
            return response;
        }, function (response) {
            $("#spinner").hide();
            return $q.reject(response);
        });
    };
});

angular.module('app').controller('twitterCtrl', function($scope) {

    $scope.resultsPerPage = 5;
    $scope.page = 1;
    $scope.searchTerm = "angularjs";

    $scope.twitter = $resource('http://search.twitter.com/search.json',
    { 
        callback:'JSON_CALLBACK',
        page: $scope.page,
        rpp: $scope.resultsPerPage,
        q: $scope.searchTerm 
    },
    {   
        get: { method:'JSONP' } 
    });

    $scope.load = function() {
        $scope.twitter.get(function(data) {
            $scope.tweets = data.results;
        });
    };
});