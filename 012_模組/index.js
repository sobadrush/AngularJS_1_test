// var myApp = angular.module('myAppModule',[]);

// var firstController = function($scope) {
//     $scope.empName = '羅傑';
// }

//-----------------------------------------------
angular.module('myAppModule',[])

// 定義一個【控制器firstController】在【myAppModule模組】中
.controller('firstController',function($scope) {
    $scope.empName = '羅傑';
})

.controller('secondController',function($scope) {
    $scope.empName = 'Cutey';
})