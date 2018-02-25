
var firstController = function($scope){
    $scope.myDate = new Date();

    // setInterval(function(){
    //     // 這裡雖然有變化，但沒有觸發髒檢查
    //     $scope.myDate = new Date();
    // },1000);

    setInterval(function(){
        $scope.$apply(function(){
            //......會去處發髒檢查
            $scope.myDate = new Date();
        });
    },1000);
   
}