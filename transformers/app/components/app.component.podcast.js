const podcast = {
    templateUrl:"app/components/podcast.html",
    controller:['TransformersService', function(TransformersService) {
        const vm = this;
    }]
}


angular.module('App').component('podcast', podcast);