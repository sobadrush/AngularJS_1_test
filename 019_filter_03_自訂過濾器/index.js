var myApp = angular.module('myApp', []);

myApp.service('CommonData', [function () {
    this.empData = [
        { empId : 1001 , empName:'Roger' , empAge: 34 , empSalary: 40000 },
        { empId : 1002 , empName:'Kelly' , empAge: 45 , empSalary: 33000 },
        { empId : 1003 , empName:'Ryan'  , empAge: 27 , empSalary: 24000 },
        { empId : 1004 , empName:'Sandy' , empAge: 18 , empSalary: 58000 },
        { empId : 1005 , empName:'Amber' , empAge: 23 , empSalary: 22000 },
    ];

    this.getEmpData = function(){
        return this.empData;
    };

}]);

myApp.filter('filterAge', [function() {
    return function( _inpVal /*要過濾的值*/ , _arg /*傳入的參數*/ ){

        let empArray = _inpVal;
        let ageLimit = _arg;

        // 使用ES6的 array.filter
        let qualifiedEmp = empArray.filter( (item, index, array) => {
            return item.empAge >= ageLimit; 
        });

        return qualifiedEmp;
    };
}]);


myApp.controller('EmpController', ['$scope', 'CommonData', function( $scope, commonData ){
    $scope.empData = commonData.getEmpData();
}]);