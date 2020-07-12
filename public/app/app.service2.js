"use strict";

function PricingService($http, $location) {
    const self = this;

    self.getCard = (query) => {
      console.log(query);
      return $http({
        method:"GET",
        url: `/cardName/${query}`,
      }).then((response) => {
        self.card = response.data.results[0];
        return self.card;
      }).catch(error => console.log(error));
    };

    self.getPrice = (sku) => {
      return $http({
        method:"GET",
        url: `/cardPrice/${sku}`,
      }).then((response) => {
        self.pricing = response.data.results[0];
        return self.pricing;
      }).catch(error => console.log(error));;
    };
  }

angular.module('App').service('PricingService', PricingService);