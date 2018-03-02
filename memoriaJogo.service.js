angular.module('app')
.factory('memoriaJogoService', function ($http) {

    let urlBase = 'http://localhost:3000/api/tipoAtividadesAula/2:/2';

    //GET = Listar
    function listarJogoMemoria(){
        let retorno = $http.get(urlBase);
        return retorno;
    }

    return {
        listarJogoMemoria:listarJogoMemoria
    };
})
