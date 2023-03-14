var navbarelement = document.querySelector('header')
var logoimgtransform = document.querySelector('.navmudalogo')
var aparecenavresponsive = document.querySelector('nav')
var mudarrobo = document.querySelector(".roboduascores")
var largurapage = window.screen.width;
var alinklogo = document.querySelector(".alinklogo")
var textmenu = document.querySelector(".amenu")
var menubutton = document.querySelector(".MenuMobile")

var navbarsocialfixed = document.querySelector(".socialmediaiconsfixedbar")

console.log(largurapage + "largura")
if (largurapage < 500){
    mudarrobo.src="./src/img/roboduascoresate800.png";
    window.addEventListener('scroll', () => {
    const {scrollTop} = document.documentElement;
    navbarsize=(scrollTop)
    if (scrollTop > 5){
        textmenu.style.fontSize="15px"
        menubutton.style.width="40px"
        menubutton.style.height="40px"
        navbarelement.classList.remove("headerinative")
        navbarelement.classList.add("headeractive")
        alinklogo.classList.remove("alinklogoactive")
        alinklogo.classList.add("alinklogoactivescroll")
        window.addEventListener("load", function(){
            navbarsocialfixed.style.display="flex" 
            alinklogo.classList.add("alinklogoactive")
            navbarelement.classList.add("headeractive")
            navbarelement.style.height="100px"
            logoimgtransform.src="./src/img/logonavbarsimple.png"
        })
    
    navbarelement.style.height="100px"
    logoimgtransform.src="./src/img/logonavbarsimple.png"
    logoimgtransform.addEventListener("mouseenter", function(){
        logoimgtransform.src="./src/img/logonavbarsimplehover.png"
    })
    logoimgtransform.addEventListener("mouseout", function(){
        logoimgtransform.src="./src/img/logonavbarsimple.png"
    })
    
    aparecenavresponsive.style.display="flex"
    navbarelement.style.justifyContent="space-between"
}
    else if(scrollTop < 5){
        navbarsocialfixed.style.display="none" 
        textmenu.style.fontSize="18px"
        menubutton.style.width="50px"
        menubutton.style.height="50px"
        navbarelement.classList.add("headerinative")
        navbarelement.classList.remove("headeractive")
        alinklogo.classList.add("alinklogoactive")
        alinklogo.classList.remove("alinklogoactivescroll")
        navbarelement.style.backgroundColor="transparent"
        navbarelement.style.height="150px"  
        logoimgtransform.src="./src/img/LogoHeaderInit.png"
        aparecenavresponsive.style.display="none"
        navbarelement.style.justifyContent="center"
       
    }
})
} else if (largurapage > 500){
    mudarrobo.src="./src/img/roboduascores.png";
    window.addEventListener("load", function(){
        navbarsocialfixed.style.display="none" 
    })
    window.addEventListener('scroll', () => {
        alinklogo.classList.remove("alinklogoactive")
        alinklogo.classList.add("alinklogoactivescroll")
        const {scrollTop} = document.documentElement;
        navbarsize=(scrollTop)
        if (scrollTop > 5){
        navbarsocialfixed.style.display="flex"    
            
        textmenu.style.fontSize="15px"    
        menubutton.style.width="40px"
        menubutton.style.height="40px"
 
            window.addEventListener("load", function(){
                navbarelement.classList.add("headeractive")
                navbarelement.style.height="100px"
                navbarsocialfixed.style.display="flex" 
                logoimgtransform.src="./src/img/logonavbarsimple.png"
            })    
            mudarrobo.src="./src/img/roboduascores.png";
            navbarelement.classList.remove("headerinative")
        navbarelement.classList.add("headeractive")
        navbarelement.style.height="100px"  
        logoimgtransform.src="./src/img/logonavbarsimple.png"
        
    
        
        logoimgtransform.addEventListener("mouseenter", function(){
            logoimgtransform.src="./src/img/logonavbarsimplehover.png"
        })
        logoimgtransform.addEventListener("mouseout", function(){
            logoimgtransform.src="./src/img/logonavbarsimple.png"
        })
        

    }
        else if(scrollTop < 5){
            navbarsocialfixed.style.display="none"   
            textmenu.style.fontSize="18px"
            menubutton.style.width="50px"
            menubutton.style.height="50px"
            navbarelement.classList.remove("headeractive")
            navbarelement.classList.add("headerinative")
            alinklogo.classList.add("alinklogoactive")
            alinklogo.classList.remove("alinklogoactivescroll")
            navbarelement.style.backgroundColor="transparent"
            navbarelement.style.height="150px"  
            logoimgtransform.src="./src/img/LogoHeaderInit.png"
            logoimgtransform.addEventListener("mouseenter", function(){
                logoimgtransform.src="./src/img/LogoHeaderInit.png"
            })
            logoimgtransform.addEventListener("mouseout", function(){
                logoimgtransform.src="./src/img/LogoHeaderInit.png"
            })
        
           
        }
    })
}





