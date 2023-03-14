var mudarmodelo = document.querySelector(".homemgritando")
var mudarrobozinho = document.querySelector(".roboduascores")
var mudape = document.querySelector(".mudafotope")
var tamanho = window.screen.width;

if (tamanho <= 800){
    mudarmodelo.src="./src/img/increasethesoundrespate.png";
    mudarrobozinho.src="./src/img/ate800roboduascores.png";
    mudape.src="./src/img/resp800.png"
}
else if (tamanho >= 800){
    mudarrobozinho.src="./src/img/roboduascores.png";
    mudarmodelo.src="./src/img/homemgritando.png";
    mudape.src="./src/img/pesbackground800.png"}   


