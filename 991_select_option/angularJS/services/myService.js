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