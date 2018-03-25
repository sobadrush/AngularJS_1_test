myApp.controller("SimpleDemoController", ['$scope', 'DeptService', function ($scope, deptService) {
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
        $scope.modelAsJson = angular.toJson(model, true /*format JSON*/ ); // angular.toJson() 底層 call JSON.Stringfy()
        
        if (model.lists['submitData'].length == 0) {
            $scope.hasPrepared = false;
        } else {
            $scope.hasPrepared = true;
        }

    }, true /*Deep Watch*/ );

    $scope.doSubmit = function () {
        console.log('=== doSubmit ===');
        // console.log('=== $scope.model ===', $scope.model);// 一直是 undefined
        // console.log('=== $scope.modelAsJson ===', $scope.modelAsJson);
        let modelasJsonObj = angular.fromJson($scope.modelAsJson);
        let deptVOSubmitArray = modelasJsonObj.lists['submitData'];
        // console.log("=== $scope.modelAsJson.lists['submitData'] ===", deptVOSubmitArray);

        let deptIdArray = deptVOSubmitArray.map((item) => { // 利用map方法改變陣列並回傳
            return item['DeptNo'];
        });
        // console.log('deptIdArray >>> ' , deptIdArray);

        let isEager = true;
        deptService.getDeptAndBelowEmps(isEager, deptIdArray)
            .then(function (cbData) {
                console.info('cbData', cbData);
            });

    };

}]);