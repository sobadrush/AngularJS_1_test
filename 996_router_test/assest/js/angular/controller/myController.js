angular.module('myModule1')
    .controller('firstController', ['$scope', '$location', function ($scope幹/*可自訂名稱*/, $location幹) {
        $scope幹.testRedirect_01 = function () {
            // alert(123);
            $location幹.path('/hello');
        }
        $scope幹.testRedirect_02 = function () {
            $location幹.path('/about');
        }
        $scope幹.testRedirect_03 = function () {
            $location幹.path('/product');
        }
        $scope幹.testRedirect_04 = function () {
            $location幹.path('/noPage');
        }
    }])

    .controller('helloController', ['$scope', '$location', '$routeParams', function ($ScopeHello, $LocationHello, $routeParamsHello) {
        $ScopeHello.message = $routeParamsHello.message;
    }])


;