myApp.controller("SimpleDemoController",  ['$scope', 'DeptService', function ($scope, deptService) {
    $scope.models = {
        selected: null,
        lists: {
            "unSubmitData": [],
            "submitData": []
        }
    };

    // Generate initial model
    for (let deptno = 10; deptno <= 40; deptno += 10) {
        $scope.models.lists['unSubmitData'].push({
            DeptNo: deptno
        });
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function (model) {
        $scope.modelAsJson = angular.toJson(model, true /*format JSON*/ );
    }, true /*Deep Watch*/ );


    $scope.doSubmit = function(){
        alert('=== doSubmit ===');
        deptService.getDeptAndBelowEmps(10).then(function (cbData) {
            console.info('cbData',cbData);
        });
    };

}]);