angular.module('App').config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        template: "<comp></comp>"
    })
    .when('/podcast', {
        template: "<podcast></podcast>"
    });
}]);