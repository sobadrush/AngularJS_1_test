var myApp = angular.module('myApp', [])

myApp.controller('firstController', ['$scope', function($scope){

    // =-=-=-=-=-=-= IIFE =-=-=-=-=-=-=
    ($scope.init = function(){
        console.info("IIFE init!");
        $scope.ngIf_flag = true;
        $scope.ngShow_flag = true;
        $scope.myNgStyle = {};
        $scope.ngClass_flag = false;
    })();

    $scope.testNgIf = function(){
        $scope.ngIf_flag = !$scope.ngIf_flag;
    };
    $scope.testNgShow = function(){
        $scope.ngShow_flag = !$scope.ngShow_flag;
    };
    $scope.testNgStyle = function(){
        if ('border' in $scope.myNgStyle){
            delete $scope.myNgStyle['border']; // 移除'border'這個key
        } else {
            $scope.myNgStyle = {'border':'5px solid red'};
        }
    };
    $scope.testNgClass = function(){
        $scope.ngClass_flag = !$scope.ngClass_flag;
    };

}]);