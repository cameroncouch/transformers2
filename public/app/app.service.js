"use strict";
function TransformerService($http, $location) {
    const self = this;
    self.tfdbresults;

    self.getTF = (num) => {
        return $http({
          method: "GET",
          url: `/tfdb`
        }).then(function (response) {
          self.tfdbresults = response.data;
          console.log(self.tfdbresults);
          return self.tfdbresults;
        });
      };
}

angular.module('App').service('TransformerService', TransformerService);