"use strict";

function PricingService($http, $location) {
    const self = this;

    self.getCard = (query) => {
       return $http({
        method:"GET",
        url: `/cardName/${query}`,
      }).then((response) => {
        self.card = (!!response.data && !!response.data.results && response.data.results[0]) || !!response.data && !!response.data.error && response.data;
        if (self.card.error) {
          throw self.card;
        }
        return self.card;
      }).catch(error => { console.log(error); return error; });
    };

    self.getPrice = (sku) => {
      return $http({
        method:"GET",
        url: `/cardPrice/${sku}`,
      }).then((response) => {
        for(let i = 0;i < response.data.results.length;i++) {
          if(response.data.results[i].lowPrice == null) {
            continue;
          }
          else if (response.data.results[i].lowPrice) {
            self.pricing = response.data.results[i];
          }
        }
        return self.pricing;
      }).catch(error => console.log(error));;
    };
  }

angular.module('App').service('PricingService', PricingService);