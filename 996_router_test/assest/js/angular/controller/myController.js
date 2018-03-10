angular.module('myModule1')
    .controller('firstController', ['$scope', '$location', function ($scope幹 , $location幹) { // 建構函式，參數可自訂名稱，需與陣列的順序相對應，才能正確注入
        $scope幹.testRedirect_01 = function () {
            // alert(123);
            let myName = 'Linda';
            $location幹.path(`/hello/${myName}`);
        }
        $scope幹.testRedirect_02 = function () {
            $location幹.path('/about');
        }
        $scope幹.testRedirect_03 = function () {
            $location幹.path('/product');
        }
        $scope幹.testRedirect_04 = function () {
            $location幹.path('/noPage');
        }

        //---------------------------------
        // 查城市下的鄉鎮區
        //---------------------------------
        $scope幹.cityId = 1;
        $scope幹.redirectToQueryCity = function () {
            let _cityId = $scope幹.cityId;
            //alert(`>>> redirectToQueryCity ${_cityId} <<<`);
            $location幹.path(`/queryCity/${_cityId}`); // 帶路由參數導頁到queryCity路由
        }
    }])

 


;