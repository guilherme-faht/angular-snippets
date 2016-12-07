angular.module('app', []);

angular.module('app').filter('offset', function() {
    return function(input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
});

angular.module('app').controller('paginationCtrl', function($scope) {

    $scope.itemsPerPage = 10;
    $scope.currentPage = 0;
    $scope.items = [];

    for (var i=0; i<100; i++) {
        $scope.items.push({ codigo: i, descricao: "Descrição: " + i });
    }

    $scope.range = function() {
        var rangeSize = 10;
        var ret = [];
        var start;

        start = $scope.currentPage;
        
        if ( start > $scope.pageCount()-rangeSize ) {
            start = $scope.pageCount()-rangeSize+1;
        }

        for (var i=start; i<start+rangeSize; i++) {
            ret.push(i);
        }
        
        return ret;
    };

    $scope.prevPage = function() {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };

    $scope.prevPageDisabled = function() {
        return $scope.currentPage === 0 ? "disabled" : "";
    };

    $scope.pageCount = function() {
        return Math.ceil($scope.items.length/$scope.itemsPerPage)-1;
    };

    $scope.nextPage = function() {
        if ($scope.currentPage < $scope.pageCount()) {
            $scope.currentPage++;
        }
    };

    $scope.nextPageDisabled = function() {
        return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
    };

    $scope.setPage = function(n) {
        $scope.currentPage = n;
    };
});