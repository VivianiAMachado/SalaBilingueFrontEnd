
(function () {
    'use strict';
angular.module('app', ['ngRoute', 'auth',  'ngRoute','ngAnimate', 'ngSanitize']);

// Configurações utilizadas pelo módulo de autenticação (authService)
angular.module('app').constant('authConfig', {

    // Obrigatória - URL da API que retorna o usuário
    
    //urlUsuario: 'http://10.99.0.12:3296/api/acessos/usuarioLogado',
    //urlUsuario: 'http://10.99.0.24/AutDemo.WebApi/api/acessos/usuariologado',

    urlUsuario: 'http://localhost:3000/api/acessos/usuario',

    // Obrigatória - URL da aplicação que possui o formulário de login
    urlLogin: '/login',

    urlLiga: '/liga',

    urlMemoria: '/memoria',

    urlTexto: 'http://localhost:3000/api/aulas',

    urlQuizImagem: '/quiz_imagem',

    urlQuizTexto: 'http://localhost:3000/api/aulas',

    // Opcional - URL da aplicação para onde será redirecionado (se for informado) após o LOGIN com sucesso
    urlPrivado: '/privado',

    // Opcional - URL da aplicação para onde será redirecionado (se for informado) após o LOGOUT
    urlLogout: '/home'
});
})(); 