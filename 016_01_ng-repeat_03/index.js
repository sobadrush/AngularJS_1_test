var myApp = angular.module('myNGApp', []);

myApp.controller('firstController', ['$scope', function ($scope) {

    $scope.empData = [
        { empName: 'Roger' , empAge: 18  , empSex: 'male'   , picUrl : picBase64Array[0] },
        { empName: 'Kelly' , empAge: 23  , empSex: 'female' , picUrl : picBase64Array[1] },
        { empName: 'Linda' , empAge: 15  , empSex: 'female' , picUrl : picBase64Array[2] },
        { empName: 'Scott' , empAge: 28  , empSex: 'male'   , picUrl : picBase64Array[3] },
        { empName: 'Benson', empAge: 18  , empSex: 'female' , picUrl : picBase64Array[4] },
        { empName: 'Roy'   , empAge: 11  , empSex: 'female' , picUrl : picBase64Array[5] },
        { empName: 'Frank' , empAge: 32  , empSex: 'male'   , picUrl : picBase64Array[6] },
    ];
    
    $scope.doClick = function ( _index ) {
        alert(`_index = ` + _index);
        $scope.isHighlight = true;
        $scope.clickedIndex = _index;
    }

    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=【多選】=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    $scope.choosedPicsIndex = [];  // 存放索引
    $scope.choosedPicsData  = [];  // 存放資料
    $scope.doClickMulti = function ( _$event , _$index ) {
        // alert(`_index = ` + _$index);
        // console.log(`_$event`, _$event);

        // 取消 "事件冒泡"
        if (_$event.stopPropagation) {
            _$event.stopPropagation();
        }

        if (!!_$event.ctrlKey) {
            if (!$scope.choosedPicsIndex.includes( _$index )) { // 若陣列中"沒有"此值，才push，避免重複
                $scope.choosedPicsIndex.push( _$index );
                $scope.choosedPicsData.push( $scope.empData[_$index] );
            } else{
                let idx = $scope.choosedPicsIndex.indexOf(_$index);
                $scope.choosedPicsIndex.splice(idx, 1);// 若陣列中"有"此值，移除
                $scope.choosedPicsData.splice(idx, 1); // 若陣列中"有"此值，移除
            }
        }

        // console.log(`$scope.choosedPicsIndex = `, $scope.choosedPicsIndex);
        // console.log(`$scope.choosedPicsData = `, $scope.choosedPicsData);
    }

    $scope.isChoosedArrayaContainsIdx = function ( _$index ){
        if ($scope.choosedPicsIndex.includes( _$index )) {
            return true;
        } else{
            return false;
        }
    }

    $scope.cleanArray = function(){
        alert(`cleanArray!!`);
        $scope.choosedPicsIndex = [];
        $scope.choosedPicsData.splice(0, $scope.choosedPicsData.length);
    }

}]);

var picBase64Array = [
    'https://i.ytimg.com/vi/1xbkrrTcpzQ/hqdefault.jpg',
    'https://p2.bahamut.com.tw/B/2KU/04/0000285404.JPG',
    'https://stickershop.line-scdn.net/stickershop/v1/product/1439/LINEStorePC/main@2x.png;compress=true',
    'https://i.ebayimg.com/images/g/WG0AAOSwuAVWvkUW/s-l300.jpg',
    'http://www.people.com.cn/mediafile/pic/20130329/40/14723488638212985996.jpg',
    'https://vignette.wikia.nocookie.net/vsbattles/images/c/cf/Piccolo_Resurrection_F.png/revision/latest?cb=20160318014713',
    'http://store.happytifyaged.com/uploads/20180124/BE/BE99AE330052w419h240.jpeg',
];