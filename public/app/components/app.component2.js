"use strict"
const comp2 = {
    templateUrl:"app/components/comp2.html",
    styleUrls:['app/style2.css'],
    controller:['PricingService','TransformerService','$rootScope', function(PricingService, TransformerService,$rootScope){
        const vm = this;
        vm.pricemodal;

        vm.regExReplace = (query) => {
            let removeRarity = / (\(\w*\))/g
            return query.replace(removeRarity,'');
        }

        vm.getCard = async (query) => {
            query = vm.regExReplace(query);
            await PricingService.getCard(query).then(() => vm.setCard(PricingService.card));
        }

        vm.setCard = async (val) => {
            await vm.getPrice(PricingService.card.productId).then(vm.card = val).catch((error) => console.log(error));
            return vm.card;
        }

        vm.getPrice = async (sku) => {
            await PricingService.getPrice(sku).then(() => vm.setPrice(PricingService.pricing)).catch((error) => console.log(error));
            let id = sku;
            return id;
        }

        vm.setPrice = (price) => {
            return vm.price = price;
        }
        vm.showPrice = function() {
            vm.pricemodal = !vm.pricemodal;
            $rootScope.$broadcast('comp2ToComp1', vm.pricemodal);
        }
        $rootScope.$on('comp1ToComp2', (event,data) => {
                vm.bots1 = data[0];
                vm.bots2 = data[1];
                vm.bots3 = data[2];
                vm.bots4 = data[3];
                vm.pricemodal = data[4];
                vm.helpmodal = data[5];
                vm.podcastmodal = data[6];
        })
    }]
}

angular.module('App').component('comp2', comp2);