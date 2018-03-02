(function () {
    'use strict';

   var app =  angular.module('app', [
        'ngRoute',
        'ngAnimate'
    ]);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/card', {
                controller: 'CardController',
                templateUrl: 'card/cardView.html'
            })
            .otherwise({
                redirectTo: '/card'
            });
    });

})();    