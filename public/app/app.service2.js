"use strict";
function PricingService($http, $location) {
    const self = this;


    self.getCard = (query) => {
      console.log(query);
      return $http({
        method:"GET",
        url: `http://api.tcgplayer.com/v1.32.0/catalog/products?categoryId=57&productName=${query}`,
        headers: {
          'Authorization': 'Bearer W9TjqM1j_RTPHQILuJtmdZC1ELcZrS7NU6Y2-_NRWGjIbpRpO09Um9-bvZh_UrFif05QPhtgVCw3GpRZ-EVuHJQmNH0sriQnu0NtBpWJOjB3GH36GJLRwWPyKSWILT5YJk8_dIUmnHY08DZcYRAAlg1luAFfxExN4VfusrxLvF52Mc-xLN7D6_lTbgsFtc1LkiwFodvQVJBMGyFNrEtYjYZMmnrR7Su_qaNWoEEh91jANfmXQNK-QoqVp6XLKuKBoADIRg8UzNgWMur8bbQTSplKCyrx1ihtbNp70s7VCN3MIFyKMu6I7lqzGLMCLcCVUKYeaA'
        },
      }).then((response) => {
        self.card = response.data.results[0];
        return self.card;
      });
    };

    self.getPrice = (sku) => {
      return $http({
        method:"GET",
        url: `http://api.tcgplayer.com/v1.32.0/pricing/product/${sku}`,
        headers: {
          'Authorization': 'Bearer W9TjqM1j_RTPHQILuJtmdZC1ELcZrS7NU6Y2-_NRWGjIbpRpO09Um9-bvZh_UrFif05QPhtgVCw3GpRZ-EVuHJQmNH0sriQnu0NtBpWJOjB3GH36GJLRwWPyKSWILT5YJk8_dIUmnHY08DZcYRAAlg1luAFfxExN4VfusrxLvF52Mc-xLN7D6_lTbgsFtc1LkiwFodvQVJBMGyFNrEtYjYZMmnrR7Su_qaNWoEEh91jANfmXQNK-QoqVp6XLKuKBoADIRg8UzNgWMur8bbQTSplKCyrx1ihtbNp70s7VCN3MIFyKMu6I7lqzGLMCLcCVUKYeaA'
        },
      }).then((response) => {
        self.pricing = response.data.results[0];
        return self.pricing;
      });
    };
  }

angular.module('App').service('PricingService', PricingService);