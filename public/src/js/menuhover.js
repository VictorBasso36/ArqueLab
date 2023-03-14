var menu = document.querySelector('.amenu');
var nav = document.querySelector('nav');
var MenuMobile = document.querySelector('.MenuMobile');
var menubar1 = document.querySelector('.lineonemenu')
var menubar = document.querySelector('.linetwomenu')
var menubar3 = document.querySelector('.linethreemenu')
function entrarmenu(){
    menu.style.color="#ea1e77"
    menu.style.margin = '0px 43px 0px 0px' 
    menubar1.style.color="#eee8ef"
    menubar.style.background="#ea1e77"
    menubar.style.margin = '0px 25px 0px 0px' 
    menubar3.style.color="#eee8ef"
};
function sairmenu(){
    menu.style.color="#eee8ef"
    menu.style.margin = '0px 20px 0px 0px' 
    menubar1.style.color="#eee8ef"
    menubar.style.background="#eee8ef"
    menubar.style.margin = '0px 0px 0px 0px' 
    menubar3.style.color="#eee8ef"
};





MenuMobile.addEventListener("mouseenter",entrarmenu);
MenuMobile.addEventListener("mouseout",sairmenu );

nav.addEventListener("mouseenter",entrarmenu);
nav.addEventListener("mouseout",sairmenu );

