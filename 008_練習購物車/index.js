var cartController = function ($scope) {

    $scope.myCart = undefined;

    $scope.init = function () {
        $scope.myCart = [
            {
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
        var total = 0;
        angular.forEach($scope.myCart, function (item) {
            total += item.quantity
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
        if (_item.quantity >= 1) {
            _item.quantity--;
        }else{
            let rtn = confirm('數量 < 0，直接移除此購買項目！');
            if(!!rtn){
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
}