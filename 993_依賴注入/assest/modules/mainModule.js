var myApp = angular.module('myApp', []);

// 【創建 factory "MathService" 用于两数的乘积 provides a method multiply to return multiplication of two numbers】
myApp.factory('MathService', function () {
    let mathSvcObj = {};
    mathSvcObj.multiply = function (a, b) {
        return a * b;
    }
    return mathSvcObj;
});

// 【在 service 中注入 factory "MathService"】
myApp.service('CalcService', ['MathService', function (mathSvc) {
    this.square = function (_aa, _bb) {
        return mathSvc.multiply(_aa, _bb);
    }
}]);


myApp.controller('firstController', ['$scope', 'CalcService', function ($scope, CalcService) {
    $scope.inputVal = 0;
    $scope.outputVal = 0;

    $scope.calcSquare = function () {
        $scope.outputVal = CalcService.square($scope.inputVal, $scope.inputVal);
    }

}]);