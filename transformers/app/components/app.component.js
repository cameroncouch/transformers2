"use strict";
const comp = {
    templateUrl:"app/components/comp.html",
    controller:['TransformerService', function(TransformerService){
        const vm = this;
        vm.clicked = "false"
        //brings our objects over from transformers.js
        vm.bots1 = mappedTransformers1;
        vm.bots2 = mappedTransformers2;
        //bots in the field are kept here so the data can be mutated separately from the og object
        vm.botArr = [];
        //health for each bot in botArr, corresponds with index - this is needed to ensure we can't heal past initial health
        vm.healthArr = [];
        //when user clicks the add button, add that transformer to the field. Limit 4 bots in the field, no duplicates.
        vm.add = function(bot) {
            for (let i = 0; i < vm.botArr.length; i++) {
                if (bot.title === vm.botArr[i].title) {
                    alert("This Transformer is already on your team.");
                return;
                }
            }
            if (vm.botArr.length < 4) {
            vm.botArr.push(angular.copy(bot));
            vm.healthArr.push(angular.copy(bot.wrench));
            }
        }
        //when user clicks the heal button, this will add 1 to the bot health w/o going over the initial health
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
        //when user clicks the damage button, this will subtract 1 from the bot health w/o going under 0
        vm.mathMin = function(bot) {
            if(bot.wrench != 0) {
            bot.wrench--;
            }
        }
        //when field clear is clicked, clears botArr and healthArr, blanks the field, and ensures the original bot object data is not mutated
        vm.clear = function() {
            vm.botArr = [];
            vm.healthArr = [];
        }
        //collapses/expands the menu element when user clicks the hide bar
        vm.hide = function() {
            vm.clicked = !vm.clicked;
        }
    }]
}


angular.module('App').component('comp', comp);