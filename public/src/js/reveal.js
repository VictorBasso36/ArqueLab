
const barnavanim = new IntersectionObserver (entries => {
    
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('alinklogoactive')
        }
    })
}, {threshold:[0, .5, 1]
})

Array.from(document.querySelectorAll('.alinklogo')).forEach(element => {
    barnavanim.observe(element)
})






const observer = new IntersectionObserver (entries => {
    
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('iconimgactive')
        }
    })
}, {threshold:[0, .5, 1]
})

Array.from(document.querySelectorAll('.iconimg')).forEach(element => {
    observer.observe(element)
})


/*fimanim1*/ 




const observee = new IntersectionObserver (entries => {
    
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('activeaniactive')
        }
    })
}, {threshold:[0, .5, 1]
})

Array.from(document.querySelectorAll('.activeani')).forEach(element => {
    observee.observe(element)
})

/*fimanimtitle1*/ 

const observeee = new IntersectionObserver (entries => {
    
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('activeanimaactive')
        }
    })
}, {threshold:[0, .5, 1]
})

Array.from(document.querySelectorAll('.activeanima')).forEach(element => {
    observeee.observe(element)
})



/*especialimg*/
/*animate__bounceIn*/
const observeeee = new IntersectionObserver (entries => {
    
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 0.5) {
            entry.target.classList.add('especialimgactive')
        }
    })
}, {threshold:[0, .5, 1]
})

Array.from(document.querySelectorAll('.especialimg')).forEach(element => {
    observeeee.observe(element)
})


/*telaandroid*//*titles*/ 
const observeeeee = new IntersectionObserver (entries => {
    
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('ativaanimmobileactive')
        }
    })
}, {threshold:[0, .5, 1]
})

Array.from(document.querySelectorAll('.ativaanimmobile')).forEach(element => {
    observeeeee.observe(element)
})

var mudatvlink = document.querySelector('.ico8n')

var mudatv = document.querySelector('.icon8')
mudatvlink.addEventListener("mouseenter", function(){
    mudatv.src="./src/img/8iconhover.png"
})
mudatvlink.addEventListener("mouseout", function(){
    mudatv.src="./src/img/8icon.png"
})
mudatv.addEventListener("mouseenter", function(){
    mudatv.src="./src/img/8iconhover.png"
})
mudatv.addEventListener("mouseout", function(){
    mudatv.src="./src/img/8icon.png"
})
//animate__slideInDown
const observeeeeee = new IntersectionObserver (entries => {
    
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('arrowbuttonactive')
        }
    })
}, {threshold:[0, .5, 1]
})

Array.from(document.querySelectorAll('.arrowbutton')).forEach(element => {
    observeeeeee.observe(element)
})


// window.sr = ScrollReveal({reset:true})
// sr.reveal('.efeitoimagem',{ duration:1500})
// sr.reveal('.alinhaicons',{ duration:2000})
// sr.reveal('.img360',{ duration:2000})
// sr.reveal('.titleservicos',{ duration:2000})
// sr.reveal('.casestitle',{ duration:2000})
// sr.reveal('.tato',{duration:2000})



// ScrollReveal().reveal('.efeitoimagem, .alinhaicons, .img360, .titleservicos,.casestitle,.tato')