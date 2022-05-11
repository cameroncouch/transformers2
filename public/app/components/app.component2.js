"use strict"
const comp2 = {
    templateUrl: "app/components/comp2.html",
    styleUrls: ['app/style2.css'],
    controller: ['PricingService', 'TransformerService', '$rootScope', function (PricingService, TransformerService, $rootScope) {
        const vm = this;
        vm.pricemodal;
        vm.errorMsg

        vm.regExReplace = (query) => {
            let removeRarity = /\s(\(\w*\))/g
            return query.replace(removeRarity, '');
        }

        vm.getCard = async (query) => {
            vm.errorMsg = '';
            query = vm.regExReplace(query);
            await PricingService.getCard(query)
                .then((data) => {
                    if (data.error) {
                        throw data.error
                    }
                    else {
                        return vm.card = data;
                    }
                })
                .then(card => {
                    return PricingService.getPrice(card.productId);
                })
                .then(pricing => {
                    return vm.price = pricing;
                })
                .catch(error => {
                    vm.errorMsg = error;
                    return error;
                });
        }

        vm.showPrice = function () {
            vm.pricemodal = !vm.pricemodal;
            $rootScope.$broadcast('comp2ToComp1', vm.pricemodal);
        }
        $rootScope.$on('comp1ToComp2', (event, data) => {
            vm.bots1 = data[0];
            vm.bots2 = data[1];
            vm.bots3 = data[2];
            vm.bots4 = data[3];
            vm.bots5 = data[4];
            vm.pricemodal = data[4];
            vm.helpmodal = data[5];
            vm.podcastmodal = data[6];
        })
    }]
}

angular.module('App').component('comp2', comp2);