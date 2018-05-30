var myApp = angular.module('myApp', []);

myApp.controller('firstController', ['$scope', function ($scope) {
    $scope.init = function () {
        console.log('=========== CALL firstController init() ===========');
        $scope.message = '';
    };
    $scope.init();
}]);
