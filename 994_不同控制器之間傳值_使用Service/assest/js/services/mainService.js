myApp.service('globalService', function () {
    this.sharedData = [1, 2, 3, 4, 5]; // 要在Controller中共用的資料(透過Service傳遞)

    this.getCommonArray = function () {
        return this.sharedData;
    }
});