let mobileMenu = document.querySelector('.mobile-menu');
let navList = document.querySelector('.nav-list')
let navLinks = document.querySelector('.nav-list li')
let navLinksrest = document.querySelector('.li2', '.li3', '.li4')
let navLinkstwo = document.querySelector('#anav2')
let navLinksTres = document.querySelector('#anav3')


var xx = window.screen.width;
 
if(xx < 800 ){
  navLinks.addEventListener("click", function(){
 
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active")
    
  
  })
  
  navLinkstwo.addEventListener("click", function(){
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active")
  
  })
  navLinksTres.addEventListener("click", function(){
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active")
    
  
  })
 
  
} else{
  if(yy > 800){
    
  }
}


class MobileNavbar {
  
    constructor(mobileMenu, navList, navLinks, navclick) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.navclick = document.querySelectorAll(navclick)
      this.activeClass = "active";
      
      this.handleClick = this.handleClick.bind(this);
    }
    
    animateLinks() {
      
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`)
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
    
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
      console.log(this.handleClick)
    }
    
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      
      
    }

    
  
    init() {
      if (this.mobileMenu, this.navclick) {
        this.addClickEvent();
      }
      return this;
    }

 
    
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    ".spananav",
  );
  mobileNavbar.init();