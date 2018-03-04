angular.module('myApp', [], function ($provide) {

        // 1.自訂義工廠
        // 說明：factory方法，直接把一個函數當成是一個物件的$get()方法
        $provide.factory('CustomerFactory', function () {
            return [18, 20, 25, 23, 25, 36, 47];
        });

        // 2.自訂義服務
        // 說明：return 必須是物件型態(不可以是基本型別，數字、字串...)
        $provide.service('myCustomerService', function () {
            return ['永和', '中和'];
        });
    })
    .controller('firstController', function ($scope, CustomerFactory, myCustomerService) {
        console.log('>>> 2 , CustomerFactory', CustomerFactory);
        console.log('>>> 2 , myCustomerService', myCustomerService);

        // 初始化
        ($scope.init = function () {
            $scope.inputVO = {
                deptName: '國防部',
                empNumber: CustomerFactory.length,
                empAges: CustomerFactory
            }
        })();
    })