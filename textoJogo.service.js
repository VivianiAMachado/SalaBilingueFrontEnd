angular.module('app')
.factory('textoJogoService', function ($http) {

    let urlBase = 'http://localhost:3000/api/atividadeAulaTextoImagem/2:/1:/10';

   // let urlBase = 'http://localhost:3000/api/atividadeAulaTexto/2:/10';

    //let urlBase = 'http://localhost:3000/api/atividadeAulaTexto/4:/42';

    //let urlBase = 'http://localhost:3000/api/atividadeAulaTexto/2:/9';

    //GET = Listar
    function listar(){
        let retorno = $http.get(urlBase);
        return retorno;
    }

    return {
        listar:listar
    };
})
