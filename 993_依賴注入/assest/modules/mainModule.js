var myApp = angular.module('myApp', []);

// 【創建 factory "MathService" 用于两数的乘积 provides a method multiply to return multiplication of two numbers】
myApp.factory('MathService', function () {
    // 工廠：生產物件
    let mathSvcObj = {}; // 所以回傳一個物件，且在其中定義屬於該物件的方法
    mathSvcObj.multiply = function (a, b) {
        return a * b;
    }
    return mathSvcObj;
});

// 【在 service 中注入 factory "MathService"】
myApp.service('CalcService', ['MathService', function (mathSvc) {

    // 定義屬於 MathService 的 function，所以用 this
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


// 自訂filter(帶參數)
//【在filter中操作$scope，樣板中透過 this 將 $scope傳入filter】
// https://stackoverflow.com/questions/17596246/access-scope-variables-from-a-filter-in-angularjs
myApp.filter('myFilter', function () {
    // _inpVal : 需要過濾的輸入值
    // _arg    : 過濾器參數
    return function (_inpVal, _arg) {
        // console.log('input >>> ', _inpVal, ', _arg ', _arg);
        if (isNaN(_inpVal) == true) { // 若不是 number
            _arg.inputVal = ''; // 此時 _arg 為firstController的$scope
            return "not a number";
        } else {
            return _inpVal;
        }
    }
});