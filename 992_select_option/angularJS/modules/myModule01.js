var myApp = angular.module('myApp', []);

myApp.service('BusRouteNameService', ['$http','$q', function ($http, $q) {

    /**
     * 取得縣市名稱
     */
    this.getAllCityNameChinese = function() {
        let deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://works.ioa.tw/weather/api/all.json'
        }).then(function (response) {
            // console.log('success response', response);
            deferred.resolve(response.data);
            // console.log('success busDataArray', busDataArray);
        }, function (response) {
            console.log('error response', response);
        }); 
        return deferred.promise;
    }

    /**
     * 根據縣市名稱查公車路線
     */
    this.getBusRouteNameByCity = function() {
        let deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeByFrequency/City/NewTaipei?$top=10&$format=JSON'
        }).then(function (response) {
            // console.log('success response', response);
            deferred.resolve(response.data);
            // console.log('success busDataArray', busDataArray);
        }, function (response) {
            console.log('error response', response);
        }); 
        return deferred.promise;
    }

    this.getCommonCityNameMapping = function () {
        return [
            {'台北' : 'Taipei'} , { '基隆' : 'Keelung' } , { '新北' : 'NewTaipei' },
            {'桃園' : 'Taoyuan'} , { '台中' : 'Taichung' } , { '台南' : 'Tainan' }
        ];
    }

}]);


myApp.controller('BusRouteNameController', ['$scope','BusRouteNameService', function($scope , BusRouteNameService) {

    let = cityNameMapping = BusRouteNameService.getCommonCityNameMapping();// 縣市中英文對照
    console.warn('cityNameMapping >>> ' , cityNameMapping);
    

    $scope._getAllCityNameChinese = function() {
        BusRouteNameService.getAllCityNameChinese().then(function (cbData) {
            console.log('getAllCityNameChinese cbData >>> ' , cbData);
            $scope.allCityNameChineseArray = cbData;
            $scope.selectedOption = $scope.allCityNameChineseArray[1];// 預設值
        });
        $scope.allCityNameChineseArrayToKeep = $scope.allCityNameChineseArray;// 如果沒用另一個$scope變數存放取回的allCityNameChineseArray，則每次1選取下拉選單時，內容就會被覆蓋為空陣列
    };

    //TODO: 查到的中文縣市名稱映射成英文名，再根據英文名稱查詢公車路線

    $scope._getBusRouteNameByCity = function() {
        let busRouteNameData = BusRouteNameService.getBusRouteNameByCity().then(function (cbData) {
            console.log('BusRouteNameController cbData >>> ' , cbData);
        });
    }

}]);



