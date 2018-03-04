/**
 * angular.module( name , [,requires] , configFn 配置設定 )
 */
angular.module('myAppModule', [], function ($provide /*angular自動注入$provide物件*/ ) {
        console.log(111);

        // 自訂義服務
        // angular是用$provider物件，來實現自動依賴注入機制，注入機制透過調用$provider的$get()方法，把得到的物件作為參數進行相關調用
        $provide.provider('CustomerService', function () {
            this.$get = function () {
                return {
                    message: 'CustomerService Message'
                }
            }
        })
    })

    // 定義一個【控制器firstController】在【myAppModule模組】中
    .controller('firstController', function ($scope, CustomerService/*注入L8的Service*/) {
        console.log(222);
        console.log('222 CustomerService',CustomerService);
        $scope.empName = '羅傑';
    })

    .controller('secondController', function ($scope, CustomerService/*注入L8的Service*/) {
        console.log(333);
        console.log('333 CustomerService',CustomerService);
        $scope.empName = 'Cutey';
    })