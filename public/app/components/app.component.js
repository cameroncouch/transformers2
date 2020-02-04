"use strict";
const comp = {
    templateUrl:"app/components/comp.html",
    controller:['TransformerService', function(TransformerService){
        const vm = this;
        vm.clicked = true;
        vm.clickedBots = [false, false, false, false]
        vm.podcastmodal = false;
        vm.helpmodal = false;
        vm.isCombiner = false;
        vm.combCounter = 0;
        vm.dreadCounter = 0;
        vm.skyCounter = 0;
        vm.bots1 = undefined;
        vm.bots2 = undefined;
        vm.bots3 = undefined;
        vm.bots4 = undefined;
        
        var optMax = undefined;
        var volCan = undefined;
        //bots in the field are kept here so the data can be mutated separately from the og object
        vm.botArr = [];
        //health for each bot in botArr, corresponds with index - this is needed to ensure we can't heal past initial health
        vm.healthArr = [];

        //when user clicks the add button, add that transformer to the field. Limit 6 bots in the field, no duplicates.
        vm.add = function(bot) {
            for (let i = 0; i < vm.botArr.length; i++) {
                if (bot.title === vm.botArr[i].title) {
                    alert("This Transformer is already on your team.");
                return;
                }
            }
            //6 is the max team length
            if (vm.botArr.length < 6) {
                //is this part of Optimus Maximus?
                if (bot.attr4 === "Sentinel") {
                    //iterate over the optMax array
                    for (let j = 0; j < optMax.length; j++) {
                        //is the bot being added in the optMax array?
                        if(bot.title === optMax[j].title) {
                        //splice it out of optMax
                        optMax.splice(j, 1);
                        console.log(optMax);
                        }
                        //keep looping until all bots added have been removed from optMax
                        else continue;
                    }
                }
                else if (bot.attr4 === "Dinobot") {
                    //iterate over the volCan array
                    for (let j = 0; j < volCan.length; j++) {
                        //is the bot being added in the volCan array?
                        if(bot.title === volCan[j].title) {
                        //splice it out of volCan
                        volCan.splice(j, 1);
                        console.log(volCan);
                        }
                        //keep looping until all bots added have been removed from optMax
                        else continue;
                    }
                }
                //put a copy of the clicked bot in the array, "on the fiel"
            vm.botArr.push(angular.copy(bot));
            //put a copy of the bots max health in the array, can't heal more than max
            vm.healthArr.push(angular.copy(bot.health));
            }
        }
        //when user clicks the heal button, this will add 1 to the bot health w/o going over the initial health
        vm.mathAdd = function(bot) {
            for(let i = 0; i < vm.botArr.length; i++) {
                if(vm.botArr[i].name === bot.name) {
                    if (bot.health < vm.healthArr[i]) {
                    bot.health++;
                    return;
                    }
                }
            }
        }
        //when user clicks the damage button, this will subtract 1 from the bot health w/o going under 0
        vm.mathMin = function(bot) {
            if(bot.health != 0) {
            bot.health--;
            }
        }
        //when user clicks damage button, increment the combinercounter. This counter is used to damage a combiner when it comes into play
        vm.counterAdd = function(bot) {
            if (bot.attr4 === "Aerialbot" || bot.attr4 === "Constructicon" || bot.attr4 === "Dreadwing" || bot.attr4 === "Sentinel" || bot.attr4 === "Dinobot" || bot.attr4 === "Predacon" || bot.attr4 === "Stunticon" || bot.attr4alt === "Omega Supreme" || bot.attr4alt === "Skytread") {
                vm.isCombiner = true
                for(let i = 0; i < vm.botArr.length; i++) {
                    if(vm.botArr[i].name === bot.name) {
                        if (bot.health < vm.healthArr[i]) {
                        vm.combCounter++;
                        console.log(vm.combCounter);
                        }
                    }
                }
            }
        }
        //when user clicks heal button, decrement the combinercounter. This counter is used to damage a combiner when it comes into play
        vm.counterMin = function(bot) {
            
            if (bot.attr4 === "Aerialbot" || bot.attr4 === "Constructicon" || bot.attr4 === "Dreadwing" || bot.attr4 === "Sentinel" || bot.attr4 === "Dinobot" || bot.attr4 === "Predacon" || bot.attr4 === "Stunticon" || bot.attr4alt === "Omega Supreme" || bot.attr4alt === "Skytread") {
                vm.isCombiner = true
                if (vm.combCounter !== 0) {
                    vm.combCounter--
                    console.log(vm.combCounter);
                }
            }
        }
        vm.dreadAdd = function(bot) {
            if (bot.attr4 === "Dreadwing") {
                vm.isCombiner = true
                for(let i = 0; i < vm.botArr.length; i++) {
                    if(vm.botArr[i].name === bot.name) {
                        if (bot.health < vm.healthArr[i]) {
                        vm.dreadCounter++;
                        }
                    }
                }
            }
        }
        //when user clicks heal button, decrement the dreadCounter, specific for Dreadwing since he can have buddies on the team
        vm.dreadMin = function(bot) {
            
            if (bot.attr4 === "Dreadwing") {
                vm.isCombiner = true
                if (vm.dreadCounter !== 0) {
                    vm.dreadCounter--;
                }
            }
        }
        vm.skyAdd = function(bot) {
            if (bot.attr4alt === "Skytread") {
                vm.isCombiner = true
                for(let i = 0; i < vm.botArr.length; i++) {
                    if(vm.botArr[i].name === bot.name) {
                        if (bot.health < vm.healthArr[i]) {
                        vm.skyCounter++;
                        }
                    }
                }
            }
        }
        //when user clicks heal button, decrement the dreadCounter, specific for Dreadwing since he can have buddies on the team
        vm.skyMin = function(bot) {
            if (bot.attr4alt === "Skytread") {
                vm.isCombiner = true
                if (vm.skyCounter !== 0) {
                    vm.skyCounter--;
                }
            }
        }
        //when field clear is clicked, clears botArr and healthArr, blanks the field, re-instantiates optMax and ensures the original bot object data is not mutated
        vm.clear = function() {
            vm.botArr = [];
            vm.healthArr = [];
            optMax = [vm.bots2[52], vm.bots2[38], vm.bots2[36], vm.bots2[29], vm.bots2[24], vm.bots2[23]];
            volCan = [vm.bots2[47], vm.bots2[48], vm.bots2[49], vm.bots2[54], vm.bots2[21]];
            vm.combCounter = 0;
            vm.dreadCounter = 0;
            vm.skyCounter = 0;
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
        vm.hideBots = function(num) {
            if (vm.clickedBots[num] == false) {
                vm.clickedBots[num] = true
            }
            else if (vm.clickedBots[num] == true) {
                vm.clickedBots[num] = false;
            }
        }
        vm.show = function() {
            if (vm.podcastmodal == false) {
                vm.podcastmodal = true
            }
            else if (vm.podcastmodal == true) {
                vm.podcastmodal = false;
            }
        }
        vm.showHelp = function() {
            if (vm.helpmodal == false) {
                vm.helpmodal = true
            }
            else if (vm.helpmodal == true) {
                vm.helpmodal = false;
            }
        }
        //function for combining Sentinel characters only, due to the special way in which they combine a separate function is needed
        vm.optMaxCombine = function() {
            for (let i = 0; i <= vm.botArr.length; i++) {
                if (vm.botArr[i].attr4 == "Sentinel" && vm.botArr[i+1].attr4 == "Sentinel" && vm.botArr[i+2].attr4 == "Sentinel") {
                    for (let j = optMax.length -1; i <= optMax.length; j--) {
                        console.log(i);
                        if (optMax.length === vm.botArr.length) {
                            let optMaxDeadBotHealth = optMax[0].health + optMax[1].health + optMax[2].health;
                            vm.botArr = [];
                            vm.healthArr = [];
                            vm.add(vm.bots2[35]);
                            vm.botArr[vm.botArr.length - 1].health -= vm.combCounter;
                            vm.botArr[vm.botArr.length - 1].health -= optMaxDeadBotHealth;
                            break;
                        }
                        else {alert("Not eligible to combine!")}
                        break;
                    }
                }
                break;
            }
        }
        //this is just a copy of optMax combine, more or less. Grimlock's ability makes this tough!
        vm.volcanicusCombine = function() {
            for (let i = 0; i <= vm.botArr.length; i++) {
                if (vm.botArr[i].attr4 == "Dinobot" && vm.botArr[i+1].attr4 == "Dinobot" && vm.botArr[i+2].attr4 == "Dinobot") {
                    for (let j = volCan.length -1; i <= volCan.length; j--) {
                        console.log(i);
                        if (volCan.length <= vm.botArr.length) {
                            let volCanDeadBotHealth = volCan[0].health + volCan[1].health;
                            vm.botArr = [];
                            vm.healthArr = [];
                            vm.add(vm.bots2[58]);
                            vm.botArr[vm.botArr.length - 1].health -= vm.combCounter;
                            vm.botArr[vm.botArr.length - 1].health -= volCanDeadBotHealth;
                            break;
                        }
                        else {alert("Not eligible to combine!")}
                        break;
                    }
                }
                break;
            }
        }
        //function for combining all "combiner" characters based on type value. onclick if Sentinel/Aerialbot/Constructicon etc. clear board, add respective combiner, and minus combiner health by damage dealt to previous uncombined characters. Will need a damage counter that increments in the background. Combined bot +- damage counted. 
        vm.combine = function() {
            for (let i = 0; i <= vm.botArr.length; i++) {
               if  (vm.botArr[i].attr4 === "Sentinel" && vm.botArr[i+1].attr4 === "Sentinel" && vm.botArr[i+2].attr4 === "Sentinel") {
                   console.log("break");
                   break;
               }
               else if (vm.botArr[i].attr4 === "Aerialbot" && vm.botArr[i+1].attr4 === "Aerialbot" && vm.botArr[i+2].attr4 === "Aerialbot") {
                    console.log(vm.botArr[i].name);
                    console.log("Superion has been formed");
                    vm.botArr = [];
                    vm.healthArr = [];
                    vm.add(vm.bots2[52]);
                    //math for combiner minus damage from component bots
                    vm.botArr[vm.botArr.length - 1].health -= vm.combCounter;
                    console.log(vm.combCounter);
                }
                else if (vm.botArr[i].attr4 === "Stunticon" && vm.botArr[i+1].attr4 === "Stunticon" && vm.botArr[i+2].attr4 === "Stunticon") {
                    console.log(vm.botArr[i].name);
                    console.log("Menasor has been formed");
                    vm.botArr = [];
                    vm.healthArr = [];
                    vm.add(vm.bots2[57]);
                    //math for combiner minus damage from component bots
                    vm.botArr[vm.botArr.length - 1].health -= vm.combCounter;
                }
                else if (vm.botArr[i].attr4 === "Predacon" && vm.botArr[i+1].attr4 === "Predacon" && vm.botArr[i+2].attr4 === "Predacon") {
                    console.log(vm.botArr[i].name);
                    console.log("Predaking has been formed");
                    vm.botArr = [];
                    vm.healthArr = [];
                    vm.add(vm.bots2[61]);
                    //math for combiner minus damage from component bots
                    vm.botArr[vm.botArr.length - 1].health -= vm.combCounter;
                }
                else if (vm.botArr[i].attr4 === "Dinobot" && vm.botArr[i+1].attr4 === "Dinobot" && vm.botArr[i+2].attr4 === "Dinobot") {
                    break;
                }
                else if (vm.botArr[i].attr4 === "Constructicon" && vm.botArr[i+1].attr4 === "Constructicon" && vm.botArr[i+2].attr4 === "Constructicon") {
                    console.log(vm.botArr[i].name);
                    console.log("Devastator has been formed");
                    vm.botArr = [];
                    vm.healthArr = [];
                    vm.add(vm.bots2[13]);
                    //math for combiner minus damage from component bots
                    vm.botArr[vm.botArr.length - 1].health -= vm.combCounter;
                }
                else if (vm.botArr[i].attr4 === "Dreadwing" && vm.botArr[i+1].attr4 === "Dreadwing") {
                    vm.botArr = vm.botArr.filter(bot => bot.attr4 !== "Dreadwing");
                    let saveBot = vm.botArr;
                    vm.healthArr = []
                    vm.botArr = [];
                    for (let j = 0; j < saveBot.length; j++) {
                        vm.add(saveBot[j]);
                    }
                    vm.add(vm.bots2[18]);
                    //math for combiner minus damage from component bots
                    vm.botArr[vm.botArr.length - 1].health -= vm.dreadCounter;
                   
                }
                else if (vm.botArr[i].attr4alt === "Skytread" && vm.botArr[i+1].attr4alt === "Skytread") {
                    vm.botArr = vm.botArr.filter(bot => bot.attr4alt !== "Skytread");
                    let saveBot = vm.botArr;
                    vm.healthArr = []
                    vm.botArr = [];
                    for (let j = 0; j < saveBot.length; j++) {
                        vm.add(saveBot[j]);
                    }
                    vm.add(vm.bots4[42]);
                    //math for combiner minus damage from component bots
                    vm.botArr[vm.botArr.length - 1].health -= vm.skyCounter;
                   
                }
                else if (vm.botArr[i].attr4alt === "Omega Supreme" && vm.botArr[i+1].attr4alt === "Omega Supreme" && vm.botArr[i+2].attr4alt === "Omega Supreme") {
                    console.log(vm.botArr[i].name);
                    console.log("Omega Supreme has been formed");
                    vm.botArr = [];
                    vm.healthArr = [];
                    vm.add(vm.bots4[28]);
                    //math for combiner minus damage from component bots
                    vm.botArr[vm.botArr.length - 1].health -= vm.combCounter;
                }
                
                else {
                    continue;
                }  
            } 
        }
        vm.transformersGet = function (num) {
            if (vm.bots1 == undefined) {
            TransformerService.getTF(num);
            vm.bots1 = TransformerService.tfdbresults;
            }
        }
        vm.transformersGet2 = function () {
            if (vm.bots2 == undefined) {
            TransformerService.getTF2();
            vm.bots2 = TransformerService.tfdbresults2;
            optMax = [vm.bots2[52], vm.bots2[38], vm.bots2[36], vm.bots2[29], vm.bots2[24], vm.bots2[23]];
            volCan = [vm.bots2[47], vm.bots2[48], vm.bots2[49], vm.bots2[54], vm.bots2[21]];
            }
        }
        vm.transformersGet3 = function (num) {
            if (vm.bots3 == undefined) {
            TransformerService.getTF3();
            vm.bots3 = TransformerService.tfdbresults3;
            }
        }
        vm.transformersGet4 = function (num) {
            if (vm.bots4 == undefined) {
            TransformerService.getTF4();
            vm.bots4 = TransformerService.tfdbresults4;
            }
        }
        
    }]
}

angular.module('App').component('comp', comp);