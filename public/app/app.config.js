angular.module('App').config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        template: "<comp></comp>"
    })
    .when('/comp2', {
        template: "<comp2></comp2>"
    });
}]);