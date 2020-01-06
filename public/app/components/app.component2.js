"use strict"
const comp2 = {
    templateUrl:"app/components/comp2.html",
    styleUrls:['app/style2.css'],
    controller:['TransformersService', function(TransfomersService){
        const vm = this;
    }]
}

angular.module('App').component('comp2', comp2);