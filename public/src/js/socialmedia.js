var zapzap = document.querySelector(".zapzap")
var instagrola = document.querySelector(".instagrola")
var facebook = document.querySelector(".facebook")
//var linkedin = document.querySelector(".linkedin")

zapzap.addEventListener("mouseenter", function(){
    zapzap.src="./src/img/zapzapdark.png"
})
zapzap.addEventListener("mouseout", function(){
    zapzap.src="./src/img/zapzap.png"
})

instagrola.addEventListener("mouseenter", function(){
    instagrola.src="./src/img/instagroladark.png"
})
instagrola.addEventListener("mouseout", function(){
    instagrola.src="./src/img/instagrola.png"
})

facebook.addEventListener("mouseenter", function(){
    facebook.src="./src/img/facebookdark.png"
})
facebook.addEventListener("mouseout", function(){
    facebook.src="./src/img/facebook.png"
})

//linkedin.addEventListener("mouseenter", function(){
 //  linkedin.src="./src/img/Linkedindark.png"
//})
//linkedin.addEventListener("mouseout", function(){
 //   linkedin.src="./src/img/Linkedin.png"
//})



//fixednavbarhvoer

var zapzapfixedbar = document.querySelector(".zapzapfixedbar")
var instagrolafixedbar = document.querySelector(".instagrolafixedbar")
var facebookfixedbar = document.querySelector(".facebookfixedbar")

zapzapfixedbar.addEventListener("mouseenter", function(){
    zapzapfixedbar.src="./src/img/zapzapdark.png"
})
zapzapfixedbar.addEventListener("mouseout", function(){
    zapzapfixedbar.src="./src/img/zapzap.png"
})

instagrolafixedbar.addEventListener("mouseenter", function(){
    instagrolafixedbar.src="./src/img/instagroladark.png"
})
instagrolafixedbar.addEventListener("mouseout", function(){
    instagrolafixedbar.src="./src/img/instagrola.png"
})

facebookfixedbar.addEventListener("mouseenter", function(){
    facebookfixedbar.src="./src/img/facebookdark.png"
})
facebookfixedbar.addEventListener("mouseout", function(){
    facebookfixedbar.src="./src/img/facebook.png"
})