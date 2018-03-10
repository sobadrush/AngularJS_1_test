angular.module('myModule1')
    .controller('aboutController', ['$rootScope', '$scope', '$location', function ($$rootScope, $$scope, $$location) {
        console.log('about Ctrl $$location.search()' , $$location.search());
    }]);