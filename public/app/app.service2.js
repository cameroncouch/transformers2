"use strict";

function PricingService($http, $location) {
    const self = this;

    self.getCard = (query) => {
      console.log(query);
      return $http({
        method:"GET",
        url: `https://api.tcgplayer.com/v1.32.0/catalog/products?categoryId=57&productName=${query}`,
        headers: {
          'Authorization': 'Bearer oc-GMWUAdIaCdeK-WUkRDmISwKS0o8PYF_TS2uxCxWZbK_O9U6OcuBp_6gqp8faMqSGsDyEviQCpPUvTD8qCApeHZ1DEV-Hct-TWrCd_kJPW8C4c0nYDQkDb34ybYDP_foadWcrp6cdMdeNbf88omwlWbe9eBYXLYRNe5y4ZxQsSwzu5P0cFLbL_Vl75BTu-IQ23ymIbZpDSNqsHddTTEg6bTa5fL34iVZXugB-Pj3DA26JqrDiwoCegJWnnjR4VFe0Kga2v0r00QZzFZkawLvRAUkeIVmqSqmhClg1JFsgcLqbM62A1wmX-Ye3cYYDqpKIy1A'
        },
      }).then((response) => {
        self.card = response.data.results[0];
        return self.card;
      }).catch(error => console.log(error));
    };

    self.getPrice = (sku) => {
      return $http({
        method:"GET",
        url: `https://api.tcgplayer.com/v1.32.0/pricing/product/${sku}`,
        headers: {
          'Authorization': 'Bearer oc-GMWUAdIaCdeK-WUkRDmISwKS0o8PYF_TS2uxCxWZbK_O9U6OcuBp_6gqp8faMqSGsDyEviQCpPUvTD8qCApeHZ1DEV-Hct-TWrCd_kJPW8C4c0nYDQkDb34ybYDP_foadWcrp6cdMdeNbf88omwlWbe9eBYXLYRNe5y4ZxQsSwzu5P0cFLbL_Vl75BTu-IQ23ymIbZpDSNqsHddTTEg6bTa5fL34iVZXugB-Pj3DA26JqrDiwoCegJWnnjR4VFe0Kga2v0r00QZzFZkawLvRAUkeIVmqSqmhClg1JFsgcLqbM62A1wmX-Ye3cYYDqpKIy1A'
        },
      }).then((response) => {
        self.pricing = response.data.results[0];
        return self.pricing;
      }).catch(error => console.log(error));;
    };
  }

angular.module('App').service('PricingService', PricingService);