var routeModule = angular.module('routeModule', ['ngRoute']);

routeModule
  .config(['$routeProvider', function($routeProvider)
  {
    $routeProvider
      .when('/hello',
      {
        templateUrl: 'hello.html'
      })
      .when('/about',
      {
        templateUrl: 'about.html'
      })
      .when('/product',
      {
        templateUrl: 'product.html'
      })
      // .otherwise(
      // {
      //   templateUrl: 'hello.html'
      // }) ;
  }]) ;