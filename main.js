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

    navbarMenu.classList.remove('open');
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:'smooth'});
});


// navbar toggle btn for small screen

const navbar__toggle = document.querySelector('.navbar__toggle');
navbar__toggle.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open');
})



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




// show arrow-up 
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll',()=>{
    if(window.scrollY>homeHeight/2){
        arrowUp.classList.add('visible');
    }
    else{
        arrowUp.classList.remove('visible');
    }
})

// handle scroll on the 
arrowUp.addEventListener('click',()=>{
    scrollIntoView('#home')
});


// projects

const workBtnContianer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');


workBtnContianer.addEventListener('click',(e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter==null) {return;}
    console.log(filter);

    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');





    projectContainer.classList.add('ani-nout');

   
    setTimeout(()=>{
        projects.forEach((project)=>{
            if(filter==='*' || filter === project.dataset.filter){
                project.classList.remove('invisible');
            }
            else{
                project.classList.add('invisible');
            }
        });            
        projectContainer.classList.remove('ani-nout');
    },300);
});









function scrollIntoView(selector){
    const scrolllTo = document.querySelector(selector);
    scrolllTo.scrollIntoView({behavior:'smooth'});
}




