var someheader = document.querySelector("header")
var mobilemenu = document.querySelector(".MenuMobile")
var nav = document.querySelector("nav")
var modall = document.querySelector(".navbarmodal")
var closemodal = document.querySelector(".closemenuandscroll")
var closemodal2 = document.querySelector(".closemenuandscroll2")
var closemodal3 = document.querySelector(".closemenuandscroll3")
var closemodal4 = document.querySelector(".closemenuandscroll4")
var amenu = document.querySelector(".amenu")
var anavclick = document.querySelector(".anavclick")
var activeani = document.querySelector(".formformms")



nav.addEventListener("click",function(){
modall.style.display="flex"
someheader.style.display="none"
modall.style.opacity="0"
setTimeout(function(){modall.style.opacity="1"
},50);

})
anavclick.addEventListener("click", function(){
    modall.style.display="flex"
    someheader.style.display="none" 
    someheader.style.display="none"
modall.style.opacity="0"
setTimeout(function(){modall.style.opacity="1"
},50);

})

mobilemenu.addEventListener("click",function(){
    modall.style.display="flex"
    someheader.style.display="none"
    someheader.style.display="none"
modall.style.opacity="0"
setTimeout(function(){modall.style.opacity="1"
},50);

    })
closemodal.addEventListener("click", function(){
    modall.style.display="none"
    someheader.style.display="flex"
})
closemodal2.addEventListener("click", function(){
    modall.style.display="none"
    someheader.style.display="flex"
})
closemodal3.addEventListener("click", function(){
    modall.style.display="none"
    someheader.style.display="flex"
})
closemodal4.addEventListener("click", function(){
   
    modall.style.display="none"
    someheader.style.display="flex"
})

modall.addEventListener("click", function(){
    modall.style.display="none"
    someheader.style.display="flex"
})

amenu.addEventListener("click", function(){
    modall.style.display="flex"
    someheader.style.display="none"
modall.style.opacity="0"
setTimeout(function(){modall.style.opacity="1"
},50);

    someheader.style.display="none" 
})

///hover menunavbar
var zapzap2 = document.querySelector(".zapzap2")
var instagrola2 = document.querySelector(".instagrola2")
var facebook2 = document.querySelector(".facebook2")
var linkedin2 = document.querySelector(".linkedin2")

zapzap2.addEventListener("mouseenter", function(){
    zapzap2.src="./src/img/zapzapdark.png"
})
zapzap2.addEventListener("mouseout", function(){
    zapzap2.src="./src/img/zapzap.png"
})

instagrola2.addEventListener("mouseenter", function(){
    instagrola2.src="./src/img/instagroladark.png"
})
instagrola2.addEventListener("mouseout", function(){
    instagrola2.src="./src/img/instagrola.png"
})

facebook2.addEventListener("mouseenter", function(){
    facebook2.src="./src/img/facebookdark.png"
})
facebook2.addEventListener("mouseout", function(){
    facebook2.src="./src/img/facebook.png"
})

//linkedin2.addEventListener("mouseenter", function(){
//   linkedin2.src="./src/img/Linkedindark.png"
//})
//linkedin2.addEventListener("mouseout", function(){
 //   linkedin2.src="./src/img/Linkedin.png"
//})
/*menuhover*/

