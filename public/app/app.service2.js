"use strict";

function PricingService($http, $location) {
    const self = this;

    self.getCard = (query) => {
      console.log(query);
      return $http({
        method:"GET",
        url: `http://api.tcgplayer.com/v1.32.0/catalog/products?categoryId=57&productName=${query}`,
        headers: {
          'Authorization': 'Bearer 5pKxy3aMz3D9C4Z9ONFue_JP-a2lpFTpDMNf0scGqWKz_vZRihzUcAKw7B5qM9Nky12VhgqSuFX0uObTbWyR-yYvlAM9XYizKsmUvTKkVBCN63y3Vutpc-YomjyzPqpvZtniIIn8YbyQuQY9sc7z1CTCECXG7Zvro4ozmvkvOGsFIIx9IV1r-i5rKC99yeI4gIryZYUMgvZhHqFKZXnLQGgi7NFKHNpJY8y0lZ8JzulprOHgkTNIJVzh5Odnm3ItLE_TWp2at_bKr95r0Eow0M3A-YMJ-aMQx3ix_7YHi5yCOhSvh3LqMTlEWv3iMIJqt8YIoQ'
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
          'Authorization': 'Bearer 5pKxy3aMz3D9C4Z9ONFue_JP-a2lpFTpDMNf0scGqWKz_vZRihzUcAKw7B5qM9Nky12VhgqSuFX0uObTbWyR-yYvlAM9XYizKsmUvTKkVBCN63y3Vutpc-YomjyzPqpvZtniIIn8YbyQuQY9sc7z1CTCECXG7Zvro4ozmvkvOGsFIIx9IV1r-i5rKC99yeI4gIryZYUMgvZhHqFKZXnLQGgi7NFKHNpJY8y0lZ8JzulprOHgkTNIJVzh5Odnm3ItLE_TWp2at_bKr95r0Eow0M3A-YMJ-aMQx3ix_7YHi5yCOhSvh3LqMTlEWv3iMIJqt8YIoQ'
        },
      }).then((response) => {
        self.pricing = response.data.results[0];
        return self.pricing;
      });
    };
  }

angular.module('App').service('PricingService', PricingService);