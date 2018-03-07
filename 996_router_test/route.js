// $routeProvider負責把這樣的關係建構起來。
// 首先我們會使用module.config()，再把$routeProvider「注入」到config中。

angular.module('routeModule', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/index', { // .when()的第一個參數是客製化的URL，第二個參數是一個物件，稱為route
                templateUrl: '../pages/welcome.html' // 代表html檔案的路徑
            })
            .when('/about', {
                templateUrl: '../pages/about_us.html'
            })
            .when('/product', {
                templateUrl: '../pages/product.html'
            })
            .otherwise({ // 類似 switch 的 default
                templateUrl: '../pages/welcome.html'
            });

    }])