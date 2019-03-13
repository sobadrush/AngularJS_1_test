var myApp = angular.module('myApp', []);

myApp.controller('cartController', ['$scope', function ($scope) {
    
    $scope.productVO = undefined; // 新增的商品資料

    $scope.myCart = undefined;

    $scope.init = function () {

        $scope.myCart = [{
                id: 1000,
                name: 'iPhone 5s',
                quantity: 3,
                price: 5500
            },
            {
                id: 1001,
                name: 'iPhone 4s',
                quantity: 30,
                price: 3000
            },
            {
                id: 1002,
                name: 'iPhone X',
                quantity: 6,
                price: 42000
            },
            {
                id: 1003,
                name: 'mac pro',
                quantity: 9,
                price: 23000
            },
            {
                id: 1004,
                name: 'iPad pro',
                quantity: 10,
                price: 12000
            },
        ]
    }

    $scope.init();
    console.log('cartController.$scope', $scope);

    /*
     * 計算總金額
     */
    $scope.totalPrice = function () {
        var total = 0;
        angular.forEach($scope.myCart, function (item) {
            total += item.quantity * item.price
        });
        return total;
    }

    /*
     * 計算總購買數
     */
    $scope.totalQuanity = function () {
        let total = 0;
        angular.forEach($scope.myCart, function (item) {
            total += parseInt(item.quantity);
        });
        return total;
    }

    $scope.remove = function (_item) {
        // alert(_item.id);
        let idx_start = findItemIndex(_item);
        console.log('商品index >>> ', idx_start);
        $scope.myCart.splice(idx_start /*起始索引*/ , 1 /*從起始索引刪除幾個*/ );
    }

    /**
     * 找出click時，點擊的商品對應其在陣列中的索引
     */
    var findItemIndex = function (_item) {
        let idx = $scope.myCart.indexOf(_item);
        return idx;
    }

    /**
     * 判斷購物車中有無商品
     */
    $scope.isProductsInCart = function () {
        return $scope.myCart.length == 0; // ==0 , 無商品
    }

    /**
     * 減少購買數量
     */
    $scope.reduceQuantity = function (_item) {
        if (_item.quantity > 1) {
            _item.quantity--;
        } else {
            let rtn = confirm('數量 < 0，直接移除此購買項目！');
            if (!!rtn) {
                $scope.remove(_item);
            }
        }
    }

    /**
     * 增加購買數量
     */
    $scope.addQuantity = function (_item) {
        _item.quantity++;
    }

    /**
     * 新增商品
     */
    $scope.doAddProduct = function (_prodVO) {
       console.log("新增商品 , _prodVO >>> " , _prodVO);
       $scope.myCart.push( _prodVO );
    }

    /**
     * 監控 myCart 中所有變數
     */
    $scope.$watch('myCart', function (newValue, oldValue) {
        // console.log('newValue', newValue);
        // console.log('oldValue', oldValue);

        angular.forEach(newValue, (elem, index) => {
            // console.log(elem.quantity);
            // console.log('index >>>',index);
            if (elem.quantity < 1) {
                let rtn = confirm('輸入負值將會移除此商品，確定嗎?');
                if (!!rtn) {
                    $scope.remove(elem);
                } else {
                    // console.log('oldValue[index] >>>',oldValue[index]);
                    elem.quantity = oldValue[index].quantity; // 若confirm取消，將數值還原
                }
            }
        })
    }, true /*DeepWatch*/ );
}]);