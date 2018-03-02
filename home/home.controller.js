angular.module('app').controller('HomeController', function ($scope, textoJogoService) {
     
  listarTexto();
      function listarTexto() {
        let promisse = textoJogoService.listar();
        promisse.then(function (response) {
            $scope.textos = response.data;
            var tam = response.data.length;
            if(tam == 2){
                $scope.tam_col = 4;
            }
            else{
                $scope.tam_col = 8;
            }
            
        });
    }
  
  });