angular.module('myApp')
    .controller('pupUpDialogController', ['$scope', function ($scope) {

        $scope.init = function () {
            console.log('pupUpDialogController init() $scope >>> ', $scope);
            console.log('pupUpDialogController init() $scope.ngDialogData >>> ', $scope.ngDialogData);
            console.log('pupUpDialogController init() $myScope = $scope.$parent >>> ', $scope.$parent);
        }
        $scope.init();

    }]);