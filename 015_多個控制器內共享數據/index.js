angular.module('myApp', [])

    .factory('myFactory', function () {
        return {
            message: '共享的數據'
        };
    })

    .controller('firstController', function ($scope, myFactory/*注入*/) {

        //※※※ 此處值不可為基本類型，否則secondController無法連動，必須是【物件】型別(參考)
        $scope.data = {
            empName: '張三'
        };

        $scope.Data = myFactory;
    })

    .controller('secondController', function ($scope, myFactory/*注入*/) {
        $scope.data = $scope.$$prevSibling.data;
        $scope.Data = myFactory;
    })