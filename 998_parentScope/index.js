var parentController = function ($scope) {

    $scope.init = function () {
        $scope.inputVO = {
            deptName: '國防部',
            deptLoc: '中正區',
            depts_below_emps: [
                {empName : 'Roger', empNo:'z40180', empAge:28},
                {empName : 'Kevin', empNo:'z40199', empAge:3},
                {empName : 'Yeon' , empNo:'z40255', empAge:22},
            ],
        };
    };
    $scope.init();
    console.log('parentController.$scope', $scope);

}

var childController = function ($scope) {
    $scope.myName = '哆啦A夢';
    $scope.childVO = $scope.$parent.inputVO; // ※※※ 使用Parent取得外層ControllerJS裡定義的值
    

    // 立即函式，init初始化
    (function init() {
        $scope.myName = '哆啦A夢222';
        console.log('$scope.childVO', $scope.childVO);
    })();

}