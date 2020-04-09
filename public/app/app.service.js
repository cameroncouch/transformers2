"use strict";
function TransformerService($http, $location) {
    const self = this;
    self.tfdbresults;
    self.tfdbresults2;
    self.tfdbresults3;
    self.tfdbresults4;
    self.card;
    self.pricing;

    self.getTF = (num) => {
        return $http({
          method: "GET",
          url: `/tfdb`
        }).then(function (response) {
          self.tfdbresults = response.data;
          return self.tfdbresults;
        });
      };
      self.getTF2 = (num) => {
        return $http({
          method: "GET",
          url: `/tfdb2`
        }).then(function (response) {
          self.tfdbresults2 = response.data;
          return self.tfdbresults2;
        });
      };
      self.getTF3 = (num) => {
        return $http({
          method: "GET",
          url: `/tfdb3`
        }).then(function (response) {
          self.tfdbresults3 = response.data;
          return self.tfdbresults3;
        });
      };
      self.getTF4 = (num) => {
        return $http({
          method: "GET",
          url: `/tfdb4`
        }).then(function (response) {
          self.tfdbresults4 = response.data;
          return self.tfdbresults4;
        });
      };
      self.getCard = (query) => {
        return $http({
          method:"GET",
          url: `http://api.tcgplayer.com/v1.32.0/catalog/products?categoryId=57&productName=${query}`,
          headers: {
            'Authorization': 'Bearer BYXMqcPCRCPthjntXlTXZOQFohJQeKfyXftajBYjvngwGwVapT4Lbu3XmhBhTJ-2XoljGLFyHJYWa4yHqGZqWm8aliXLd7-21qcT2p-sJE1p1C3KFyviRPxBgdkfUm3XYLcK5Rpdste3LT7fXYGEmRSSPIUkBEMYOyKnH7FgG1WOj1brL8Ua3-H6ZwPGQ1Q3NSVIEUQDXrG3rBOKU4ICd_bqMwlkxu3GN7pYN9Ip3i0xXDyTFD2jKTivaQHmHqG09qS-NLbALOpS_04FBxa0sDjHcsYAwZrOD630eldrzRdHuNJR630G6_Z7lMiDrBF1F_mSdQ'
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
            'Authorization': 'Bearer BYXMqcPCRCPthjntXlTXZOQFohJQeKfyXftajBYjvngwGwVapT4Lbu3XmhBhTJ-2XoljGLFyHJYWa4yHqGZqWm8aliXLd7-21qcT2p-sJE1p1C3KFyviRPxBgdkfUm3XYLcK5Rpdste3LT7fXYGEmRSSPIUkBEMYOyKnH7FgG1WOj1brL8Ua3-H6ZwPGQ1Q3NSVIEUQDXrG3rBOKU4ICd_bqMwlkxu3GN7pYN9Ip3i0xXDyTFD2jKTivaQHmHqG09qS-NLbALOpS_04FBxa0sDjHcsYAwZrOD630eldrzRdHuNJR630G6_Z7lMiDrBF1F_mSdQ'
          },
        }).then((response) => {
          self.pricing = response;
          return self.pricing;
        });
      };
}

angular.module('App').service('TransformerService', TransformerService);