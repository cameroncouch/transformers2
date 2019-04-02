"use strict";
const comp = {
    templateUrl:"app/components/comp.html",
    controller:['TransformerService', function(TransformerService){
        const vm = this;
        vm.clicked = "false"
        vm.bots1 = mappedTransformers1;
        vm.bots2 = mappedTransformers2;
        vm.botArr = [];
        vm.healthArr = [];
        vm.add = function(bot) {
            for (let i = 0; i < vm.botArr.length; i++) {
                if (bot.title === vm.botArr[i].title) {
                    console.log("hi");
                return;
                }
            }
            if (vm.botArr.length < 4) {
            vm.botArr.push(angular.copy(bot));
            vm.healthArr.push(angular.copy(bot.wrench));
            }
        }
        vm.mathAdd = function(bot) {
            for(let i = 0; i < vm.botArr.length; i++) {
                if(vm.botArr[i].name === bot.name) {
                    if (bot.wrench < vm.healthArr[i]) {
                    bot.wrench++;
                    return;
                    }
                }
            }
        }
        vm.mathMin = function(bot) {
            if(bot.wrench != 0) {
            bot.wrench--;
            }
        }
        vm.clear = function() {
            vm.botArr = [];
            vm.healthArr = [];
        }
        vm.hide = function() {
            vm.clicked = !vm.clicked;
        }
    }]
}


angular.module('App').component('comp', comp);