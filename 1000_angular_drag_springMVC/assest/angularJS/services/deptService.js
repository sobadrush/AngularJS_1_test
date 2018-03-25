myApp.service('DeptService', ['$http', '$q', function ($http, $q) {

    this.getDeptAndBelowEmps = function( _isEager , _deptNOs ) {
        let deferred = $q.defer();
        let params = { "deptNoArray" : _deptNOs };
        console.info('angular.toJson(params) >>> ' , angular.toJson(params));
        $http({
            method: 'POST',
            url: `http://127.0.0.1:8080/Angular1_JPA_test/spring/QueryController/query/getDeptByIdList/isEager=${_isEager}/`,
            data: angular.toJson(params),
            headers: {
                "Content-Type": "application/json; charset=utf-8;"
            }
        }).then(function (response) {
            // console.log('success response', response);
            deferred.resolve(response.data);
        }, function (response) {
            console.log('error response', response);
        }); 
        return deferred.promise;
    }

}]);