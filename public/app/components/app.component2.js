"use strict"
const comp2 = {
    templateUrl:"app/components/comp2.html",
    styleUrls:['app/style2.css'],
    controller:['PricingService', function(PricingService){
        const vm = this;

        vm.getCard = (query) => {
            PricingService.getCard(query);
            vm.setCard(PricingService.card)
        }
        vm.setCard = (val) => {
            vm.getPrice(PricingService.card.productId);
            vm.card = val;
            return vm.card;
        }

        vm.getPrice = (sku) => {
            PricingService.getPrice(sku);
            vm.setPrice(PricingService.pricing);
            let id = sku;
            console.log(vm.price);
            return id;
        }

        vm.setPrice = (price) => {
            return vm.price = price;
        }

    }]
}

angular.module('App').component('comp2', comp2);