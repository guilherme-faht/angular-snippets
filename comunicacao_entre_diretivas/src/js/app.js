angular.module('app', []);

angular.module('app').directive('carro', function() {
    return {
        restrict: 'E',
        controller: function($scope, $element, $attrs) {
            $scope.content = [];

            this.addPart = function(name) {
                $scope.content.push(name);
            };
        },
        link: function(scope, element) {
            setTimeout(function() {
                alert('O carro contém '+scope.content.length+' peças!');
            }, 1000);
        }
    };
});

angular.module('app').directive('pneu', function() {
    return {
        restrict: 'A',
        require: 'carro',
        link: function(scope, element, attrs, carroCtrl) {
            carroCtrl.addPart('pneu');
            alert('Um pneu foi adicionado ao carro!');
        }
    };
});

angular.module('app').directive('motor', function() {
    return {
        restrict: 'A',
        require: 'carro',
        link: function(scope, element, attrs, carroCtrl) {
            carroCtrl.addPart('motor');
            alert('Um motor foi adicionado ao carro!');
        }
    };
});

angular.module('app').controller('directiveCtrl', function($scope) {

});