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
    this.getBusRouteNameByCity = function(_cityEnName) {
        let deferred = $q.defer();
        $http({
            method: 'GET',
            // url: `http://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeByFrequency/City/${_cityEnName}?$top=10&$format=JSON`
            url: `http://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeByFrequency/City/${_cityEnName}?$format=JSON`
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

    let = cityNameMappingArray = BusRouteNameService.getCommonCityNameMapping();// 縣市中英文對照陣列
    // console.warn('cityNameMappingArray >>> ' , cityNameMappingArray);
    

    $scope._getAllCityNameChinese = function() {
        BusRouteNameService.getAllCityNameChinese().then(function (cbData) {
            console.log('getAllCityNameChinese cbData >>> ' , cbData);
            $scope.allCityNameChineseArray = cbData;
            $scope.selectedOption = $scope.allCityNameChineseArray[1];// 預設值(故意寫 [1]，基隆)
        });
        $scope.allCityNameChineseArrayToKeep = $scope.allCityNameChineseArray;// 如果沒用另一個$scope變數存放取回的allCityNameChineseArray，則每次1選取下拉選單時，內容就會被覆蓋為空陣列
    };

    $scope.busRouteData = undefined;
    $scope._getBusRouteNameByCity = function( _cityChineseName ) {
        // alert('ng-change');
        // console.log( $scope.selectedOption );
        // console.log( '_cityChineseName >>> ' , _cityChineseName );

        let cityEnName = findCityEnName(_cityChineseName);
        console.log( _cityChineseName + ' 的英文名稱 >>> ' , cityEnName );
        
        let busRouteNameData = BusRouteNameService.getBusRouteNameByCity( cityEnName )
            .then(function (cbData) {
                // console.log('BusRouteNameController cbData >>> ' , cbData);
                $scope.busRouteData = cbData;
            });
    };


    // 用縣市中文名稱查【縣市中英文對照】，利用array.find方法，回傳第一筆為true的物件
    let findCityEnName = function ( _chineseCityName ) {
        let targetObj = cityNameMappingArray.find( (item, index, array) => {
            // console.log("item[" + _chineseCityName + "]", item[_chineseCityName]);

            let objKey = Object.keys(item)[0];// 取得【每次滾到JS物件中的key】
            return objKey == _chineseCityName;// 若【每次滾到JS物件中的key】== 傳入的字串，則回傳此JS物件
        });

        let cityEnglishName = Object.values(targetObj)[0]; //取得【目標物件中的value】
        return cityEnglishName;
    }
    // console.log("findCityEnName('基隆') = ", findCityEnName('基隆'));

    $scope.queryPenNumber = 10;
    $scope.setQueryPenNumber = function(_$event){
        let inputTag = _$event.target;        
        $scope.queryPenNumber = inputTag.value;
        // console.log('$scope.queryPenNumber >>> ' , $scope.queryPenNumber);
    }

}]);



