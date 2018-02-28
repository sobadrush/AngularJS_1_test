// $watch
// ※ 在digest執行時，如果watch觀察的value與上次執行時不一樣時，就會被觸發！
// ※ AngularJS內部的watch實現了頁面隨model的即時更新
// ※ $watch( watchFn , watchAction , deepWatch )
//     watchFn     : angular表達式
//     watchAction : watchAction(newValue,oldValue,scope) >>> watchFn發生變化會被調用
//     deepWatch   : 可選的布林值命令檢查被監控的對向的每個屬性是否發生變化
// ※ $watch會返回一個函數，想要註銷這個watch可以使用函數

var firstController = function ($scope) {

    $scope.empName = '張三';
    $scope.count = 0;

    // 監聽一個model，當一個model每次改變時都會觸發第二個函數
    $scope.$watch('empName', function (newVal, oldVal) {
        console.info('newVal >>> ', newVal, ' , oldVal >>> ', oldVal);

        $scope.count++;
        if ($scope.count > 10) {
            $scope.empName = '修改次數 > 10';
        }

    }, false);

    //---------------------------------------------------
    $scope.deptData = {
        deptName: '國防部',
        deptLoc: '中正區',
        averageAge: 25
    }

    $scope.$watch('deptData', function (newVal, oldVal) {
        console.info('form model has been changed');
        console.info('newVal >>> ', newVal, ' , oldVal >>> ', oldVal);
    }, true);
}