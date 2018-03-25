myApp.service('DeptService', ['$http', '$q', function ($http, $q) {

    this.getDeptAndBelowEmps = function(_deptNo) {
        let deferred = $q.defer();
        let params = { "_isEager" : false , "deptNoArray" : [ 10, 20 ] };
        console.info('angular.toJson(params) >>> ' , angular.toJson(params));
        $http({
            method: 'POST',
            url: `http://127.0.0.1:8080/Angular1_JPA_test/spring/QueryController/query/getDeptByIdList`,
            // url: `http://127.0.0.1:8080/Angular1_JPA_test/spring/testController/ggg/fuck`,
            data: angular.toJson(params),
            headers: {
                "Content-Type": "application/json; charset=utf-8;"
            }
        }).then(function (response) {
            // console.log('success response', response);
            deferred.resolve(response.data);
            // console.log('success busDataArray', busDataArray);
        }, function (response) {
            console.log('error response', response);
        }); 
        return deferred.promise;
    }

}]);