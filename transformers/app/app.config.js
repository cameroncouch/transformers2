angular.module('App').config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        template: "<comp2></comp2>"
    })
    .when('/comp', {
        template: "<comp></comp>"
    })
    .when('/podcast', {
        template: "<podcast></podcast>"
    });
}]);