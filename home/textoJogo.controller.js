(function () {
    'use strict';


angular.module('app').controller('TextoJogoController', function ($scope, textoJogoService) {
    
 listarTexto();
 listarCard();
     function listarTexto() {
       let promisse = textoJogoService.listar();
       promisse.then(function (response) {
           $scope.textos = response.data;
           $scope.myText = "My name is: <h1>John Doe</h1>";
           var tam = response.data.length;
           if(tam == 2){
               $scope.tam_col = 4;
           }
           else{
               $scope.tam_col = 8;
           }
           
       });
   }
   function listarCard(){
        $scope.data = [{
            nome: 'Ichigo Kurosaki',
            imagemUrl: 'img/caderno.jpg',
        }, {
            nome: 'Orihime Inoue',
            imagemUrl: 'https://www.desktopbackground.org/download/1280x1024/2015/06/29/971869_inoue-orihime-bleach-anime-wallpapers-6905781-fanpop_2000x1250_h.jpg'
        }, {
            nome: 'Rukia Kuchiki',
            imagemUrl: 'https://wallpaperscraft.com/image/bleach_kuchiki_rukia_girl_brunette_hat_sunset_profile_37884_1280x1024.jpg'
        }];

        $scope.title = "O nome do personagem é?";
   }
  
 });
})();



