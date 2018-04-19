var myAPP = angular.module('myApp', []);

myAPP.filter('myPicFilter', [function() {
    return function( _inpVal /*要過濾的值*/ , _arg /*傳入的參數*/ ){

        console.log( '_arg' , _arg );

        let empArray = _inpVal;
        let outputArray = [];
        let tmp = {};

        let jj = 1;
        for (let ii = 0; ii < empArray.length; ii++) {

            let obj = empArray[ii];

            if (jj == 1) {
                // Object.assign(tmp, { picUrl_01 : obj.picUrl });
                tmp.picUrl_01 = obj.picUrl;
            }else if (jj == 2) {
                // Object.assign(tmp, { picUrl_02 : obj.picUrl });
                tmp.picUrl_02 = obj.picUrl;
            }
            
            if ( jj % 2 == 0 ) {
                outputArray.push( tmp );
                tmp = {};
                jj = 1;
                continue;
            }   
            
            jj++;
        }
console.log('outputArray >>>' , outputArray)
        return outputArray;
    };
}]);

myAPP.controller('firstController', ['$scope', function ($scope) {

    $scope.empData = [
        { empName: 'Roger' , empAge: 18  , empSex: 'male'   , picUrl : picBase64Array[0] },
        { empName: 'Kelly' , empAge: 23  , empSex: 'female' , picUrl : picBase64Array[1] },
        { empName: 'Linda' , empAge: 15  , empSex: 'female' , picUrl : picBase64Array[2] },
        { empName: 'Scott' , empAge: 28  , empSex: 'male'   , picUrl : picBase64Array[3] },
        { empName: 'Benson', empAge: 18  , empSex: 'female' , picUrl : picBase64Array[4] },
        { empName: 'Roy'   , empAge: 11  , empSex: 'female' , picUrl : picBase64Array[5] },
        { empName: 'Frank' , empAge: 32  , empSex: 'male'   , picUrl : picBase64Array[6] },
    ];

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






