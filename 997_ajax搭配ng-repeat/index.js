var myApp = angular.module('myApp', []);

myApp.controller('firstController', ['$scope', function($scope){
    $scope.init = function(){
        $scope.cityName = '';
        $scope.townsData = [];
        $scope.townDetail = undefined;
    };
    $scope.init();

    // 【避免keyup連續送出請求】
    var debounce = function (fn, bufferInterval) {
        let timeout;
        return function () {
          clearTimeout(timeout);
          timeout = setTimeout(fn.apply.bind(fn, this, arguments), bufferInterval);
        };
    };

    $scope.getCityName = function( _cityId ){
        debounce( getCityName(_cityId) , 500 );
    };

    var getCityName = function(_cityId){
         // 【 發送請求給 webService 】
         $.ajax({
            url: `https://works.ioa.tw/weather/api/cates/${_cityId}.json`,
            data: '',
            type:"GET",
            dataType:'json',
            success: function(cbData){
                // 使用$ajax會造成程式在Angular的context之外執行，加上$apply可以使cbData會來時自動進入Angular的digest-loop，
                // 若沒加$scope.$apply，則每次都必須click兩次button，資料才會render出來
                $scope.$apply(function(){
                    console.log('cbData', cbData);
                    $scope.cityName = cbData.name;
                });

            },
            error:function(xhr, ajaxOptions, thrownError){ 
                alert(xhr.status); 
                alert(thrownError); 
            }
        });
    }

    $scope.queryByCityId = function( _cityId ){
       
        if( undefined === _cityId ){
            alert("請輸入縣市編號！");
            return;
        }

        // 【 發送請求給 webService 】
        $.ajax({
            url: `https://works.ioa.tw/weather/api/cates/${_cityId}.json`,
            data: '',
            type:"GET",
            dataType:'json',
            success: function(cbData){
                // 使用$ajax會造成程式在Angular的context之外執行，加上$apply可以使cbData會來時自動進入Angular的digest-loop，
                // 若沒加$scope.$apply，則每次都必須click兩次button，資料才會render出來
                $scope.$apply(function(){
                    // console.log('cbData', cbData);
                    $scope.townsData = cbData.towns;
                });
            },
            error:function(xhr, ajaxOptions, thrownError){ 
                alert(xhr.status); 
                alert(thrownError); 
            }
        });

    };

    $scope.queryByTownId = function( _townId ){

         // 【 發送請求給 webService 】
         $.ajax({
            url: `https://works.ioa.tw/weather/api/towns/${_townId}.json`,
            data: '',
            type:"GET",
            dataType:'json',
            success: function(cbData){
                // 使用$ajax會造成程式在Angular的context之外執行，加上$apply可以使cbData會來時自動進入Angular的digest-loop，
                // 若沒加$scope.$apply，則每次都必須click兩次button，資料才會render出來
                $scope.$apply(function(){
                    console.log('cbData', cbData);
                    $scope.townDetail = cbData;
                });
            },
            error:function(xhr, ajaxOptions, thrownError){ 
                alert(xhr.status); 
                alert(thrownError); 
            }
        });
    };

}]);