// var myApp = angular.module('myAppModule',[]);

// var firstController = function($scope) {
//     $scope.empName = '羅傑';
// }

//-----------------------------------------------------------------------------------------------------------
// 使用 angular.module(name, [,requires]) 來建立模組(Module)時，
// 第一個參數是要指定想要的名稱，第二個陣列參數則是說當使用這模組(Module)時，它還會需要使用那些額外的模組(Module)。
//-----------------------------------------------------------------------------------------------------------
angular.module('myAppModule',[])

// 定義一個【控制器firstController】在【myAppModule模組】中
.controller('firstController',function($scope) {
    $scope.empName = '羅傑';
})

.controller('secondController',function($scope) {
    $scope.empName = 'Cutey';
})