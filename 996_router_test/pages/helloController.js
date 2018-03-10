angular.module('myModule1')
    .controller('helloController', ['$scope', '$location', '$routeParams', function ($ScopeHello, $LocationHello, $routeParamsHello) {
        $ScopeHello.message = $routeParamsHello.message;
        // $location 測試 -- http://www.cnblogs.com/liulangmao/p/4067131.html
        console.log('$location.hash() >>> ', $LocationHello.hash()); // 获取当前url的哈希值
        console.log('$location.url() >>> ', $LocationHello.url()); // 获取当前url路径(当前url#后面的内容,包括参数和哈希值)
        console.log('$location.absUrl() >>> ', $LocationHello.absUrl());
        console.log('$location.search() >>> ', $LocationHello.search()); // 获取当前url的参数的序列化json对象    
        console.log('$location.search("empName","Fucker") >>> ', $LocationHello.search('empName', 'Fucker'));
    }])