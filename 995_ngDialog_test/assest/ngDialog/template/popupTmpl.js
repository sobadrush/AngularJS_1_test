angular.module('myApp')
    .controller('pupUpDialogController', ['$scope', function ($scope) {

        $scope.init = function () {
            console.log('pupUpDialogController init() >>> ', $scope);
        }
        $scope.init();

    }]);