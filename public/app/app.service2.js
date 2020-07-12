"use strict";

function PricingService($http, $location) {
    const self = this;

    self.getCard = (query) => {
      console.log(query);
      return $http({
        method:"GET",
        url: `https://api.tcgplayer.com/v1.32.0/catalog/products?categoryId=57&productName=${query}`,
        headers: {
          'Authorization': 'Bearer Fus-pqShHuHrxwFKIxdLEVMzfhpdqEoNb6LOSe8ktjMyP91oa_-gNEzCCRKqgLwDSHxrElUusiYFRDNQt0oOhrr3MYONUZz5EJGn6DzMsY2uklUPfiuSWC_kcdDDzUS8gGMzDbRlObsTeW9n4csTnOc8uaQGbM1KH1OKaufUeTiDwTCwsUrDb3Pu0-dBKdQxAi82HgX4aP_Mml7VlRIHQHYyg7VV1mtx-GIXe-I6atVPsVcjGNichFDW98l7MOs0sZuS5HtUvu2Ly-yvVqAnnwNMOAFqIc5CWLAV43LSQeFI1CNe5K7Qj8Unj-q8FDaANCS_gw'
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
          'Authorization': 'Bearer Fus-pqShHuHrxwFKIxdLEVMzfhpdqEoNb6LOSe8ktjMyP91oa_-gNEzCCRKqgLwDSHxrElUusiYFRDNQt0oOhrr3MYONUZz5EJGn6DzMsY2uklUPfiuSWC_kcdDDzUS8gGMzDbRlObsTeW9n4csTnOc8uaQGbM1KH1OKaufUeTiDwTCwsUrDb3Pu0-dBKdQxAi82HgX4aP_Mml7VlRIHQHYyg7VV1mtx-GIXe-I6atVPsVcjGNichFDW98l7MOs0sZuS5HtUvu2Ly-yvVqAnnwNMOAFqIc5CWLAV43LSQeFI1CNe5K7Qj8Unj-q8FDaANCS_gw'
        },
      }).then((response) => {
        self.pricing = response.data.results[0];
        return self.pricing;
      }).catch(error => console.log(error));;
    };
  }

angular.module('App').service('PricingService', PricingService);