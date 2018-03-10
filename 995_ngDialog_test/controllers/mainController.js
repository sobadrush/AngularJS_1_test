angular.module('myApp')
    .controller('mainController', ['$scope', 'ngDialog', function ($myScope, myNgDialog) {

       

        // $myScope.clickToOpen = function () {
        //     myNgDialog.open({
        //         template: 'assest/ngDialog/template/popupTmpl.html',
        //         className: 'ngdialog-theme-default',
        //         controller: 'pupUpDialogController' ,
        //         scope : $myScope
        //     });
        // }
        $myScope.outerVal_empName = 'Roger Lo';
        $myScope.clickToOpen = function () {
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
    }]);