// $routeProvider負責把這樣的關係建構起來。
// 首先我們會使用module.config()，再把$routeProvider「注入」到config中。

angular.module('myModule1', ['ngRoute'])
    .config(
        ['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/hello', { // .when()的第一個參數是客製化的URL，第二個參數是一個物件，稱為route
                    templateUrl: 'pages/hello.html', // 代表html檔案的路徑
                    controller: 'helloController'
                })
                .when('/hello/:message', { // .when()的第一個參數是客製化的URL，第二個參數是一個物件，稱為route
                    templateUrl: 'pages/hello.html', // 代表html檔案的路徑
                    controller: 'helloController'
                })
                .when('/about', {
                    templateUrl: 'pages/about.html',
                    controller: 'aboutController'
                })
                .when('/product', {
                    templateUrl: 'pages/product.html'
                })
                .when('/queryCity', {
                    templateUrl: 'pages/city.html'
                })
                .when('/queryCity/:cityId', {
                    templateUrl: 'pages/city.html'
                })
                .when('/default', {
                    // templateUrl: 'pages/welcome.html'
                    template: '<h1>welcome (預設路由)</h1>' +
                        '<div>' +
                        '   <h2>首頁</h2>' +
                        '   <h2>歡迎頁面</h2>' +
                        '</div>'
                })
                .otherwise({ // 類似 switch 的 default
                    // templateUrl: 'pages/welcome.html'
                    redirectTo: '/default'
                });

        }]
    );