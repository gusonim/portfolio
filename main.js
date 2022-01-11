'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{

    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    } 


});



// handle-scrolling


const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click',(event)=>{
    const target = event.target;
    const link = target.dataset.link;
    console.log(target);
    if(link == null){
        return;
    }

    console.log(link);

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:'smooth'});
});


// handle clik on 'contact me' btn on home

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',()=>{
    scrollIntoView('#contact');
    
});

// make home slowly fade to transeparent

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    home.style.opacity=1-window.scrollY/homeHeight;
    
});




function scrollIntoView(selector){
    const scrolllTo = document.querySelector(selector);
    scrolllTo.scrollIntoView({behavior:'smooth'});
}




