"use strict";

function TransformerService($http, $location) {
    const self = this;
    self.tfdbresults;
    self.tfdbresults2;
    self.tfdbresults3;
    self.tfdbresults4;
    self.tfdbresults5;
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
      self.getTF5 = (num) => {
        return $http({
          method: "GET",
          url: `/tfdb5`
        }).then(function (response) {
          self.tfdbresults5 = response.data;
          return self.tfdbresults5;
        });
      };
}

angular.module('App').service('TransformerService', TransformerService);