angular.module('myModule1')
    .controller('cityController', ['$scope', '$http', '$q' , '$location', '$routeParams',
        function ($myScope, $myhttp, $q, $myLocation, $myRouteParams) { // 建構函式
            // console.log('$myRouteParams',$myRouteParams);
            $myScope.cityId = $myRouteParams.cityId;
            $myScope.cityName = '';
            $myScope.callBackData = {};


            $myScope.init = function () {
                console.log(`cityController init()`);
                let deferred = $q.defer();
                let _cityId = $myScope.cityId;
                $myhttp({
                    method: 'GET',
                    url: `https://works.ioa.tw/weather/api/cates/${_cityId}.json`
                }).then(function successCallback(response) {
                    setTimeout(function(){  }, 1000);
                    console.log(`SUCCESSS!`);

                    let cbData = response.data;
                    deferred.resolve(cbData);//----------------- 
                    $myScope.callBackData = cbData;

                    console.log('deferred.resolve 之後的 cbData >>> ',cbData);
                    $myScope.cityName = cbData['name'] ;

                }, function errorCallback(response) {
                    console.log(`ERROR!`);
                });
            }
            $myScope.init();
        }
    ]);