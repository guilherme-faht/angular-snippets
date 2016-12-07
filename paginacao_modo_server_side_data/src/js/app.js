angular.module('app', []);

// Serviço para simular as requisições para o servidor.
angular.module('app').factory('service', function() {

    var items = [];
    
    for (var i=0; i<100; i++) {
        items.push({codigo: i, descricao: 'Descrição: ' + i});
    }

    return {
        get: function(offset, limit) {
            return items.slice(offset, offset+limit);
        },
        total: function() {
            return items.length;
        }
    };
});

angular.module('app').controller('paginationCtrl', function($scope, service) {

    $scope.itemsPerPage = 5;
    $scope.currentPage = 0;
    
    $scope.range = function() {
        var rangeSize = 5;
        var ret = [];
        var start;

        start = $scope.currentPage;
        if ( start > $scope.pageCount()-rangeSize ) {
            start = $scope.pageCount()-rangeSize;
        }

        for (var i=start; i<start+rangeSize; i++) {
            ret.push(i);
        }
        return ret;
    };
    
    $scope.setPage = function(n) {
        if (n > 0 && n < $scope.pageCount()) {
            $scope.currentPage = n;
        }
    };
    
    $scope.prevPage = function() {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };

    $scope.prevPageDisabled = function() {
        return $scope.currentPage === 0 ? 'disabled' : '';
    };

    $scope.nextPage = function() {
        if ($scope.currentPage < $scope.pageCount() - 1) {
            $scope.currentPage++;
        }
    };

    $scope.nextPageDisabled = function() {
        return $scope.currentPage === $scope.pageCount() - 1 ? 'disabled' : '';
    };

    $scope.pageCount = function() {
        return Math.ceil($scope.total/$scope.itemsPerPage);
    };

    $scope.$watch('currentPage', function(newValue, oldValue) {
        $scope.itens = service.get(newValue*$scope.itemsPerPage, $scope.itemsPerPage);
        $scope.total = service.total();
    });
});