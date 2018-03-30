var myApp = angular.module('myApp', []);


myApp.filter('OnlyNumberAndEnglish', [ function() {
    return function (_inpVal /*要過濾的值*/ , _arg /*傳入的參數*/) {
        console.log('_inputVal => ' , _inpVal , ', _arg => ' , _arg );
        
        let oldString = _arg;
        console.log('oldString => ' , oldString);
        
        const regExp = /^[\d|a-zA-Z]+$/; // 只能是英文及數字
        if ( regExp.test(_inpVal) == true ) {
            return _inpVal;
        } else {
            return oldString + "";
        }
    };
}]);

/*(1) controller中, 注入ngModule的 $filter */
myApp.controller('EmpController', ['$scope', '$filter', function( $scope , $filter){
    
    $scope.init = function(){
        $scope.tempModel = 10;
    };
    $scope.init();


    /* (3) "需"搭配$watch，才能將在controller中使用filter的結果反應到ng-model上 */
    $scope.$watch('tempModel', function (newVal, oldVal) {
        // console.info('newVal >>> ', newVal, ' , oldVal >>> ', oldVal);

        /* (2) 即可直接在controller中使用filter */
        $scope.tempModel = $filter('OnlyNumberAndEnglish')( $scope.tempModel /*參數1*/, oldVal/*參數2 (傳入舊值)*/);
    });

}]);