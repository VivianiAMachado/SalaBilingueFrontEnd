(function () {
    'use strict';

    var cardController = function ($scope) {
        $scope.data = [{
            nome: 'Ichigo Kurosaki',
            imagemUrl: 'http://wallpaperstock.net/bleach-hollow-ichigo_wallpapers_12444_1280x1024.jpg'
        }, {
            nome: 'Orihime Inoue',
            imagemUrl: 'https://www.desktopbackground.org/download/1280x1024/2015/06/29/971869_inoue-orihime-bleach-anime-wallpapers-6905781-fanpop_2000x1250_h.jpg'
        }, {
            nome: 'Rukia Kuchiki',
            imagemUrl: 'https://wallpaperscraft.com/image/bleach_kuchiki_rukia_girl_brunette_hat_sunset_profile_37884_1280x1024.jpg'
        }];

        $scope.title = "O nome do personagem é?";

    };

    angular.module('app')
        .controller('CardController', [
            '$scope',
            cardController
        ]);

})();