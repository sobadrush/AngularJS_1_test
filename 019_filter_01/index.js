var myApp = angular.module('myApp', []);

myApp.service('ProductDataService', function () {
    // 【共用的資料】
    let ProductData = [
        { id : 100 , name : 'iPhoneX'   , price : 45000   },
        { id : 101 , name : 'PS4'       , price : 21000   },
        { id : 102 , name : '液晶螢幕'   , price : 3499    },
        { id : 103 , name : '任天堂主機' , price : 45000   },
        { id : 104 , name : 'Switch'    , price : 11000   },
        { id : 105 , name : '杜卡迪'     , price : 560000 },
        { id : 106 , name : '華碩平板'   , price : 4449   },
    ];
    return ProductData;
});


myApp.controller('ProductController', [ '$scope' , 'ProductDataService' , function($scope, _productData) {
    // console.log('productData',productData);
    
    $scope.init = function() {
        $scope.productData = _productData;
    };
    $scope.init();

}]);