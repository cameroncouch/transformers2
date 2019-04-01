angular.module('App').config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        template: "<comp></comp>"
    });
}]);