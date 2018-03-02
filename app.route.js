angular.module('app').config(function ($routeProvider) {

  $routeProvider

    // pública
    .when('/home', {
      controller: 'CardController',
      templateUrl: 'home/home.html'
    })

    // pública
    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'login/login.html'
    })

    // pública
    .when('/textoJogo', {
      controller: 'TextoJogoController',
      templateUrl: 'home/textoJogo.html'
    })

    // pública
    .when('/liga', {
      controller: 'HomeController',
      templateUrl: 'home/liga.html'
    })

    // pública
    .when('/teste', {
      controller: 'HomeController',
      templateUrl: 'home/teste.html'
    })

     // pública
     .when('/memoria', {
      controller: 'MemoriaController',
      templateUrl: 'home/memoria.html'
    })

     // pública
     .when('/quiz_imagem', {
      controller: 'HomeController',
      templateUrl: 'home/quiz_imagem.html'
    })

   // pública
        .when('/quiz_texto', {
          controller: 'HomeController',
          templateUrl: 'home/quiz_texto.html'
        })

    // privado
    .when('/privado', {
      controller: 'PrivadoController',
      templateUrl: 'privado/privado.html',
      resolve: {

        // define que para acessar esta página deve ser um usuário autenticado (mas não restringe o tipo de permissão)
        autenticado: function (authService) {
          return authService.isAutenticadoPromise();
        }
      }
    })

    .otherwise('/home');
});
