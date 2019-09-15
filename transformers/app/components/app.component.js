"use strict";
const comp = {
    templateUrl:"app/components/comp.html",
    controller:['TransformerService', function(TransformerService){
        const vm = this;
        vm.clicked = 'false';
        vm.podcastmodal = false;
        vm.isCombiner = false;
        vm.combCounter = 0;
        //brings our objects over from transformers.js
        vm.bots1 = mappedTransformers1;
        vm.bots2 = mappedTransformers2;
        vm.bots3 = mappedTransformers3;
        //bots in the field are kept here so the data can be mutated separately from the og object
        vm.botArr = [];
        //health for each bot in botArr, corresponds with index - this is needed to ensure we can't heal past initial health
        vm.healthArr = [];
        vm.optMax = [optimusprimew2, prowlw2, sunstreakerw2, miragew2, ironhidew2, hotrodw2];
        //when user clicks the add button, add that transformer to the field. Limit 6 bots in the field, no duplicates.
        vm.add = function(bot) {
            for (let i = 0; i < vm.botArr.length; i++) {
                if (bot.title === vm.botArr[i].title) {
                    alert("This Transformer is already on your team.");
                return;
                }
            }
            if (vm.botArr.length < 6) {
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
        //when user clicks damage button, increment the combinercounter. This counter is used to damage a combiner when it comes into play
        vm.counterAdd = function(bot) {
            if (bot.type1 === "Aerialbot" || bot.type1 === "Construction" || bot.type1 === "Dreadwing" || bot.type1 === "Sentinel" || bot.type1 === "Dinobot" || bot.type1 === "Predacon" || bot.type1 === "Destructicon") {
                vm.isCombiner = true
                for(let i = 0; i < vm.botArr.length; i++) {
                    if(vm.botArr[i].name === bot.name) {
                        if (bot.wrench < vm.healthArr[i]) {
                        vm.combCounter++;
                        console.log(vm.combCounter);
                        return;
                        }
                    }
                }
            }
        }
        //when user clicks heal button, decrement the combinercounter. This counter is used to damage a combiner when it comes into play
        vm.counterMin = function(bot) {
            if (bot.type1 === "Aerialbot" || bot.type1 === "Construction" || bot.type1 === "Dreadwing" || bot.type1 === "Sentinel" || bot.type1 === "Dinobot" || bot.type1 === "Predacon" || bot.type1 === "Destructicon") {
                vm.isCombiner = true
                if (vm.combCounter !== 0) {
                    vm.combCounter--
                    console.log(vm.combCounter);
                }
            }
        }
        //when field clear is clicked, clears botArr and healthArr, blanks the field, and ensures the original bot object data is not mutated
        vm.clear = function() {
            vm.botArr = [];
            vm.healthArr = [];
            vm.combCounter = 0;
            vm.optMax = optMaxTemp;
        }
        //function that clears one bot from the field, either in cases of defeat or mistakenly adding. vm.clearBot = function() {}
        vm.remove = function(bot) {
            for (let i = 0;i < vm.botArr.length;i++) {
                if(bot.title === vm.botArr[i].title) {
                vm.botArr.splice(i, 1);
                vm.healthArr.splice(i, 1);
                console.log(vm.healthArr);
                }
            }
        }
        //collapses/expands the menu element when user clicks the hide bar
        vm.hide = function() {
            vm.clicked = !vm.clicked;
        }
        vm.show = function() {
            if (vm.podcastmodal == false) {
                vm.podcastmodal = true
            }
            else if (vm.podcastmodal == true) {
                vm.podcastmodal = false;
            }
        }
        //function for combining Sentinel characters only, due to the special way in which they combine a separate function is needed
        vm.optMaxCombine = function() {
            let optMaxTemp = vm.optMax;
            for (let i = 0; i <= vm.botArr.length; i++) {
                if (vm.botArr[i].type1 == "Sentinel" && vm.botArr[i+1].type1 == "Sentinel" && vm.botArr[i+2].type1 == "Sentinel") {
                    for (let j = vm.optMax.length -1; j <= vm.optMax.length; j--) {
                        if (vm.optMax.length == vm.botArr.length) {
                            let optMaxDeadBotHealth = vm.optMax[0].wrench + vm.optMax[1].wrench + vm.optMax[2].wrench;
                            vm.botArr = [];
                            vm.healthArr = [];
                            vm.add(optimusmaximusw2);
                            vm.botArr[vm.botArr.length - 1].wrench -= vm.combCounter;
                            vm.botArr[vm.botArr.length - 1].wrench -= optMaxDeadBotHealth;
                            break;
                        }
                        else if (vm.botArr[i].name == vm.optMax[j].name) {
                            vm.optMax.splice(j, 1);  
                        }
                        else {i++;j++;}
                    }
                }
            }
        }
        //function for combining all "combiner" characters based on type value. onclick if Sentinel/Aerialbot/Constructicon etc. clear board, add respective combiner, and minus combiner health by damage dealt to previous uncombined characters. Will need a damage counter that increments in the background. Combined bot +- damage counted. 
        vm.combine = function() {
            for (let i = 0; i <= vm.botArr.length; i++) {
               if  (vm.botArr[i].type1 === "Sentinel" && vm.botArr[i+1].type1 === "Sentinel" && vm.botArr[i+2].type1 === "Sentinel") {
                   console.log("break");
                   break;
               }
               else if (vm.botArr[i].type1 === "Aerialbot" && vm.botArr[i+1].type1 === "Aerialbot" && vm.botArr[i+2].type1 === "Aerialbot") {
                    console.log(vm.botArr[i].name);
                    console.log("Superion has been formed");
                    vm.botArr = [];
                    vm.healthArr = [];
                    vm.add(superionw2);
                }
                else if (vm.botArr[i].type1 === "Stunticon" && vm.botArr[i+1].type1 === "Stunticon" && vm.botArr[i+2].type1 === "Stunticon") {
                    console.log(vm.botArr[i].name);
                    console.log("Menasor has been formed");
                    vm.botArr = [];
                    vm.healthArr = [];
                    vm.add(menasorw2);
                }
                else if (vm.botArr[i].type1 === "Predacon" && vm.botArr[i+1].type1 === "Predacon" && vm.botArr[i+2].type1 === "Predacon") {
                    console.log(vm.botArr[i].name);
                    console.log("Predaking has been formed");
                    vm.botArr = [];
                    vm.healthArr = [];
                    vm.add(predakingw2);
                }
                else if (vm.botArr[i].type1 === "Dinobot" && vm.botArr[i+1].type1 === "Dinobot" && vm.botArr[i+2].type1 === "Dinobot") {
                    console.log(vm.botArr[i].name);
                    console.log("Volcanicus has been formed");
                    vm.botArr = [];
                    vm.healthArr = [];
                    vm.add(volcanicusw2);
                }
                else if (vm.botArr[i].type1 === "Constructicon" && vm.botArr[i+1].type1 === "Constructicon" && vm.botArr[i+2].type1 === "Constructicon") {
                    console.log(vm.botArr[i].name);
                    console.log("Devastator has been formed");
                    vm.botArr = [];
                    vm.healthArr = [];
                    vm.add(devastatorw2);
                }
                else if (vm.botArr[i].type1 === "Dreadwing" || vm.botArr[i+1].type1 === "Dreadwing" && vm.botArr[i+2].type1 === "Dreadwing" ) {
                    vm.botArr = vm.botArr.filter(bot => bot.type1 !== "Dreadwing");
                    let saveBot = vm.botArr;
                    vm.healthArr = []
                    vm.botArr = [];
                    for (let j = 0; j < saveBot.length; j++) {
                        vm.add(saveBot[j]);
                    }
                    vm.add(dreadwingw2);
                }
                else {
                    continue;
                }
            }
            //math for combiner minus damage from component bots
            vm.botArr[vm.botArr.length - 1].wrench -= vm.combCounter;   
        }
    }]
}


angular.module('App').component('comp', comp);