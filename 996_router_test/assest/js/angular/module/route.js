// $routeProvider負責把這樣的關係建構起來。
// 首先我們會使用module.config()，再把$routeProvider「注入」到config中。

let myApp = angular.module('routeModule', ['ngRoute'])

    .config(
        ['$routeProvider',
            function ($routeProvider) {
                $routeProvider
                    .when('/hello', { // .when()的第一個參數是客製化的URL，第二個參數是一個物件，稱為route
                        templateUrl: 'pages/hello.html' // 代表html檔案的路徑
                    })
                    .when('/about', {
                        templateUrl: 'pages/about.html'
                    })
                    .when('/product', {
                        templateUrl: 'pages/product.html'
                    })
                    .when('/default', {
                        // templateUrl: 'pages/welcome.html'
                        template: '<h1>welcome (預設路由)</h1>' +
                                    '<div>' +
                                    '   <h2>首頁</h2>' +
                                    '    <h2>歡迎頁面</h2>' +
                                    '</div>'
                    })
                    .otherwise({ // 類似 switch 的 default
                        // templateUrl: 'pages/welcome.html'
                        redirectTo: '/default'
                    });

            }
        ]);

myApp.controller('firstController', ['$scope', '$location', function ($scope幹, $location幹) {
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
}]);