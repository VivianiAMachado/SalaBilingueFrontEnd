
//função anônima que garante que quando iniciar a aplicação o js será chamado, só tem variaveis locais

function exibeModal(id) {
  if (id == 0) {
    $('#exampleModalErro').modal('show');
  }
  else {
    $('#exampleModal').modal('show');
  }
}

$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});

$(document).ready(function () {
  // Associa o evento do popover ao clicar no link.
  $('#a-popover').popover({
    trigger: 'manual',
    html: true,
    title: 'Verbete',
    content: $('#div-popover').html() // Adiciona o conteúdo da div oculta para dentro do popover.
  }).click(function (e) {
    e.preventDefault();
    // Exibe o popover.
    $(this).popover('show');
  });

  $('#texto').popover({
    trigger: 'manual',
    html: true,
    title: 'Ajuda',
    content: $('#div-texto').html() // Adiciona o conteúdo da div oculta para dentro do popover.
  }).click(function (e) {
    e.preventDefault();
    // Exibe o popover.
    $(this).popover('show');
  });

  $('#lapis').popover({
    trigger: 'manual',
    html: true,
    title: 'Verbete',
    placement: "bottom",
    content: $('#div-lapis').html() // Adiciona o conteúdo da div oculta para dentro do popover.
  }).click(function (e) {
    e.preventDefault();
    // Exibe o popover.
    $(this).popover('show');
  });
  $('#caderno').popover({
    trigger: 'manual',
    html: true,
    title: 'Verbete',
    placement: "bottom",
    content: $('#div-caderno').html() // Adiciona o conteúdo da div oculta para dentro do popover.
  }).click(function (e) {
    e.preventDefault();
    // Exibe o popover.
    $(this).popover('show');
  });

  $('#borracha').popover({
    trigger: 'manual',
    html: true,
    title: 'Verbete',
    placement: "bottom",
    content: $('#div-borracha').html() // Adiciona o conteúdo da div oculta para dentro do popover.
  }).click(function (e) {
    e.preventDefault();
    // Exibe o popover.
    $(this).popover('show');
  });

});

$(document).on('click', 'button#btn-fechar-lapis', function () {
  $('#lapis').popover('hide');
});

$(document).on('click', 'button#btn-fechar-caderno', function () {
  $('#caderno').popover('hide');
});

$(document).on('click', 'button#btn-fechar-borracha', function () {
  $('#borracha').popover('hide');
});

$(document).on('click', 'button#btn-fechar', function () {
  $('#a-popover').popover('hide');
});

$(document).on('click', 'button#btn-fechar-texto', function () {
  $('#texto').popover('hide');
});

$(function() {
$("#btnMover_a").click(function(){
$("#elemento_a").animate({ 
// distancia da margem a esquerda
marginLeft: "200px",
// distância do topo
marginTop: "110px"
// tempo de execucao - milissegundos
}, 1000);
});

$("#btnMover_b").click(function(){
$("#elemento_b").animate({ 
// distancia da margem a esquerda
marginLeft: "180px",
// distância do topo
marginTop: "110px"
// tempo de execucao - milissegundos
}, 1000);
});

$("#btnMover_c").click(function(){
$("#elemento_c").animate({ 
// distancia da margem a esquerda
marginLeft: "-340px",
// distância do topo
marginTop: "110px"
// tempo de execucao - milissegundos
}, 1000);
});

$("#btnMover_d").click(function(){
$("#elemento_d").animate({ 
// distancia da margem a esquerda
marginLeft: "0px",
// distância do topo
marginTop: "110px"
// tempo de execucao - milissegundos
}, 1000);
});

});


