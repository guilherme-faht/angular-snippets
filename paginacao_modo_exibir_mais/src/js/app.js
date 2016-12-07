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

    $scope.itemsPerPage = 10;
    $scope.currentPage = 0;
    $scope.total = service.total();
    $scope.itens = service.get($scope.currentPage*$scope.itemsPerPage,
    $scope.itemsPerPage);

    $scope.showMore = function() {
        $scope.currentPage++;
        var newItems = service.get($scope.currentPage*$scope.itemsPerPage,
        $scope.itemsPerPage);
        $scope.itens = $scope.itens.concat(newItems);
    };

    $scope.nextPageDisabledClass = function() {
        return $scope.currentPage === $scope.pageCount()-1 ? 'disabled' : '';
    };

    $scope.pageCount = function() {
        return Math.ceil($scope.total/$scope.itemsPerPage);
    };
});