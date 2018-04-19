var myApp = angular.module('myApp', []);

myApp.controller('firstController', ['$scope', '$rootScope', function ($$scope, $$rootScope) {
    // $scope物件 => 作用域
    // 宣告model

    $$scope.empName = 'Roger';
    $$scope.empSalary = 22000;
}]);