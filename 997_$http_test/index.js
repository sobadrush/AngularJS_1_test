"use strict";
var myApp = angular.module('myApp', [], function ($provide) {

    $provide.service('myHttpClient', function ($http, $q) { // $q.defer，也就是延期 , http://xiaoyu2er.github.io/2016/01/08/angular-q-complete-guide/
        // 【service , 必須回傳一個JS物件】
        return {
            getWeather: function (cityId$) {
                let deferred = $q.defer();
                let cityId = cityId$;
                $http.get(`https://works.ioa.tw/weather/api/cates/${cityId}.json`)
                    .then(function (response) {
                        // console.log('angular.toJson(response.data) >>> ', angular.toJson(response.data));
                        deferred.resolve(response.data); // 在此處用angular.toJson()外層會取不到值
                    });
                return deferred.promise;
            }
        };
    });
});

myApp.controller('firstController', function ($scope, $http, myHttpClient) {

    $scope.init = function () {
        console.log('firstController init()');
        $scope.cityId = 1; // 雙向綁定 ng-model
        $scope.empName = 'Roger';
        $scope.empAge = 18;
    }
    $scope.init();

    /************************************************************************************************
     * https://stackoverflow.com/questions/31099630/angularjs-service-returns-undefined
     * https://weblog.west-wind.com/posts/2014/Oct/24/AngularJs-and-Promises-with-the-http-Service
     ************************************************************************************************/
    $scope.getWeather = function () {
        // alert('123');
        // alert($scope.cityId);
        let cityId_input = $scope.cityId;

        myHttpClient.getWeather(cityId_input)
            .then(function (cbData) {
                // console.log('cbData >>> ', cbData);
                console.log('cbData >>> ', cbData);
                
                // 【angular.fromJson()方法是把json转化为对象或者对象数组】 https://github.com/Wscats/Good-text-Share/issues/17
                // 【angular.toJson()方法是把对象或者数组转化json】
                console.log('cbData.towns toJson >>> ', angular.toJson( cbData['towns'] )); // ※轉成JSON
                console.log('cbData.towns fromJson >>> ', angular.fromJson( angular.toJson( cbData['towns'] ) )); // ※轉成JS物件
                $scope.townsList = cbData['towns']; // 將資料放到 $scope.townsList 中，前端用ng-repeat渲染
                $scope.cityName  = cbData['name']; 
                $scope.originCallBackData = cbData; // template中使用 pipe json
            });

    }

});