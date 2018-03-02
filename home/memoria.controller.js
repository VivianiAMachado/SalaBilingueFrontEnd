angular.module('app').controller('MemoriaController', function ($scope, memoriaJogoService) {


   listarMemoria();
   function listarMemoria() {
     let promisse = memoriaJogoService.listarJogoMemoria();
     promisse.then(function (response) {
        $scope.cartas = response.data.data;
        var carta =  response.data.data["0"].NUM_CARTAS;
           cartas();
           var matches = 0;
       
           var images = [];
       
           var flippedCards = [];
           for(var i=0; i<carta; i++){
               var img = {
                   src:"img/" + i +".jpg",
                   id: i%(carta/2)      
               };
               images.push(img);
           }  
       
           function cartas(){
             var divPai = $('.Linha');
             var mostraCarta = "";
             for(var i=0; i<carta; i++){
               mostraCarta += '<div class="card_m" id="card'+i+'">'
               mostraCarta +='   <div class="face back">'
               mostraCarta +='   </div>'
               mostraCarta +='   <div class="face front">'
               mostraCarta +='     <a href="#" id="a-popover"><i class="fa fa-question-circle" style="font-size:30px;color:red;"></i></a>'
               mostraCarta +='   </div>'
               mostraCarta +='</div>'
             }
             divPai.append(mostraCarta);
           }
           
            starGame();
           
           function starGame(){
            // cartas();
                    flippedCards = [];
               images = randomSort(images);
              // cartas();
       
               var frontFaces = document.getElementsByClassName("front");
       
              for(var i=0; i<carta; i++){
                  var card = document.querySelector("#card"+i);
       
                  card.style.left = i % (carta/2)  === 0 ? 0 + "px" : i % (carta/2)  * 155 + 0 + "px";
                  card.style.top = i < (carta/2) ? 0 + "px" : 215 + "px";
                             
                  card.addEventListener("click",flipCard,false);
                  frontFaces[i].style.background = "url('"+ images[i].src  + "') no-repeat center top";
                  frontFaces[i].style.backgroundSize = "contain";
                  frontFaces[i].setAttribute("id", images[i].id);
              }       
           }
          
           function randomSort(oldArray){
               //Math.floor(Math.random()*11);
               var newArray = [];
               while(newArray.length !== oldArray.length){
                   var i = Math.floor(Math.random()*oldArray.length);
       
                   if(newArray.indexOf(oldArray[i])< 0){
                       newArray.push(oldArray[i]);
                     
                   }
               }
               return newArray
           }
       
           function flipCard(){
               if(flippedCards.length < 2){
       
                   var faces = this.getElementsByClassName("face");
                   if(faces[0].classList.length > 2){
                       //aborta o processo
                       return;
                   }
                   faces[0].classList.toggle("flipped");
                   faces[1].classList.toggle("flipped");
       
                   flippedCards.push(this);
                  
                   if(flippedCards.length === 2){
                  
                     var c =  flippedCards[0].childNodes[1].id;
                   
                       if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id){
                           flippedCards[0].childNodes[1].classList.toggle("match");
                           flippedCards[0].childNodes[3].classList.toggle("match");
                           flippedCards[1].childNodes[1].classList.toggle("match");
                           flippedCards[1].childNodes[3].classList.toggle("match");
                           matchCardSign();
                           matches++;
                           flippedCards = [];
                           if(matches === 4){
                               gameOver();
       
                           }
                       }
                   }
               }
               else{
                   flippedCards[0].childNodes[1].classList.toggle("flipped");
                   flippedCards[0].childNodes[3].classList.toggle("flipped");
                   flippedCards[1].childNodes[1].classList.toggle("flipped");
                   flippedCards[1].childNodes[3].classList.toggle("flipped");
       
                   flippedCards = [];
               }   
           }
           function gameOver(){
               modalGameOver.style.zIndex = 10;
               modalGameOver.addEventListener("click", starGame, false);
           }
       
           function matchCardSign(){
               
           }
     });
 }
 
 });