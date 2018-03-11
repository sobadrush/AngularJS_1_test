myApp.controller('firstController', ['$scope', 'globalService', function ($myScope, globalService) {
    $myScope.commonData = globalService.getCommonArray();
    $myScope.doClick = function () {
        console.log('firstController, $myScope.commonData >>>', $myScope.commonData);
        let myArray = $myScope.commonData;
        myArray.forEach(function (elemt/*當前的元素*/, index/*索引*/, theArray/*傳入的陣列物件*/) {
            theArray[index] += 1;
        });
    }
}]);

myApp.controller('secondController', ['$scope', 'globalService', function ($myScope, globalService) {
    $myScope.commonData = globalService.getCommonArray();
    $myScope.doClick = function () {
        console.log('secondController, $myScope.commonData >>>', $myScope.commonData);
        let myArray = $myScope.commonData;
        myArray.forEach(function (elemt/*當前的元素*/, index/*索引*/, theArray/*傳入的陣列物件*/) {
            theArray[index] -= 1;
        });
    }
}]);