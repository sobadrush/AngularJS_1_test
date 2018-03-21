angular.module('myApp')
    .controller('mainController', ['$scope', 'ngDialog', function ($myScope, myNgDialog) {

        // 定義在外層$scope的變數
        $myScope.outerVal_empData = {
            empName: 'Roger Lo',
            empAge: 23,
            empEmail: 'z00040180@ctbcbank.com',
        };

        // TYPE1 : 直接用 dialog 的 scope 屬性將 外部$scope傳到 inline 寫法的 controller
        $myScope.clickToOpen_01 = function () {
            myNgDialog.open({
                template: 'assest/ngDialog/template/popupTmpl.html',
                className: 'ngdialog-theme-default',
                scope: $myScope,
                controller: ['$scope', function ($scope) {
                    $scope.init = function () {
                        console.log('pupUpDialogController init() $scope >>> ', $scope);
                        console.log('pupUpDialogController init() $myScope >>> ', $myScope);
                    }
                    $scope.init();
                }]
            });
        }

        // TYPE2 : 
        // 直接用 dialog 的 scope 屬性將 外部$scope傳到 inline 寫法的 controller，
        // 但此處因為pupUpDialogController定義在別的JS檔中，所以在pupUpDialogController中，
        // 外部的$scope對於內部的$scope來說是 【$parent】
        $myScope.clickToOpen_02 = function () {
            myNgDialog.open({
                template: 'assest/ngDialog/template/popupTmpl.html',
                className: 'ngdialog-theme-default',
                scope: $myScope,
                controller: 'pupUpDialogController',
                //-------------------------------------------------------------- 可用 data 屬性傳值給Dialog
                // 傳入的值可在 dialog 的 $scope.ngDialogData 屬性取得
                //-------------------------------------------------------------- 可用 data 屬性傳值給Dialog
                // data : { 'testMsg_01':'Fuck you' },
                data : [
                    { 'testMsg_01' : 'Fuck you' },
                    { 'testMsg_02' : '幹你娘' }
                ]
            });
        }
        
        /*****************************************
         * 對mainController控制的<li>註冊click事件 *
         *****************************************/
        $myScope.changeActiveClass = function () {
            let myLiList = document.querySelectorAll('ul.nav.nav-pills.nav-stacked > li');
            // console.log('myLiList',myLiList);
            // console.log('$(myLiList)',$(myLiList));// jQuery Object

            myLiList.forEach(function (_tag, _idx) {
                // console.log('_idx >>> ', _idx, ', _tag >>>', _tag);
                $(_tag).click(function() {
                    // console.log('$(this) >>> ', $(this));
                    // console.log('$(this).siblings() >>> ',$(this).siblings());
                    $(this).removeClass('active').addClass("active");
                    $(this).siblings().removeClass('active');
                });
            });

        }
        $myScope.changeActiveClass();

    }]);