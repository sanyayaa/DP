let nav = document.querySelector(".nav-bar");
let sideNav = document.querySelectorAll(".side-navs a")
let navBar = document.querySelectorAll(".nav-btn a");
let burgerNavBar = document.querySelector(".burger-nav");
let navBarSlide = document.querySelector(".nav-btn-slide")
let navBarSlideA = document.querySelectorAll(".nav-btn-slide a")
let names = ["Web Development.", "Photography.", "Cooking.","Coding."];   


let changingText = document.querySelector(".type-anime");
let idx = 0;
let word = names[idx];
let text = "";
let isDeleting = false;


window.addEventListener("load" , function(){
    typeWords();
    burgerNavBar.addEventListener("click", burgerNav)




})

function burgerNav(){
    if( window.innerWidth<=710 && navBarSlide.classList.contains("active")){
        navBarSlide.classList.remove("active");
    }else if(window.innerWidth<=710){
        navBarSlide.classList.add("active");
    }

}

document.addEventListener("scroll", function(){

    if(window.pageYOffset>380 && window.pageYOffset<1150){
        navBar[1].classList.add("hcurr");
        navBar[2].classList.remove("hcurr");
    }else  if(window.pageYOffset>1150 && window.pageYOffset<3030){
        navBar[1].classList.remove("hcurr");
        navBar[3].classList.remove("hcurr");
        navBar[2].classList.add("hcurr");
        
    }else  if(window.pageYOffset>3030 && window.pageYOffset<4030){
        navBar[2].classList.remove("hcurr");
        navBar[4].classList.remove("hcurr");
        navBar[3].classList.add("hcurr");
        
    }else  if(window.pageYOffset>4030){
        navBar[3].classList.remove("hcurr");
        navBar[4].classList.add("hcurr");
        
    }else{
        
        navBar[1].classList.remove("hcurr");
    }


    

    // =============== slide nav =================
    if(window.innerWidth>1024 && window.pageYOffset<1200){
        sideNav[0].classList.remove("acurr");
    }else  if(window.innerWidth>1024 && window.pageYOffset>1280 && window.pageYOffset<1640 ){
        sideNav[0].classList.add("acurr");
        sideNav[1].classList.remove("acurr");
    }else  if(window.innerWidth>1024 && window.innerWidth>1024 && window.pageYOffset>1770 && window.pageYOffset<2080){
        sideNav[0].classList.remove("acurr");
        sideNav[2].classList.remove("acurr");
        sideNav[1].classList.add("acurr");
    }else  if(window.innerWidth>1024 && window.pageYOffset>2090 &&window.pageYOffset<2550){
        sideNav[1].classList.remove("acurr");
        sideNav[3].classList.remove("acurr");
        sideNav[2].classList.add("acurr");
    }else  if(window.innerWidth>1024 && window.pageYOffset>2550 && window.pageYOffset<3120){
        sideNav[2].classList.remove("acurr");
        sideNav[3].classList.add("acurr");
    }else if(window.innerWidth>1024 ){
        sideNav[3].classList.remove("acurr");

    }
    // height 1024=============

    if( window.innerWidth<=1024 && window.pageYOffset<1200){
        sideNav[0].classList.remove("acurr");
    }else  if(window.innerWidth<=1024 && window.pageYOffset>1280 && window.pageYOffset<2180 ){
        sideNav[0].classList.add("acurr");
        sideNav[1].classList.remove("acurr");
    }else  if(window.innerWidth<=1024 && window.pageYOffset>2180 && window.pageYOffset<2460){
        sideNav[0].classList.remove("acurr");
        sideNav[2].classList.remove("acurr");
        sideNav[1].classList.add("acurr");
    }else  if(window.innerWidth<=1024 && window.pageYOffset>2460 &&window.pageYOffset<2930){
        sideNav[1].classList.remove("acurr");
        sideNav[3].classList.remove("acurr");
        sideNav[2].classList.add("acurr");
    }else  if(window.innerWidth<=1024 && window.pageYOffset>2930 && window.pageYOffset<3490){
        sideNav[2].classList.remove("acurr");
        sideNav[3].classList.add("acurr");
    }else{
        sideNav[3].classList.remove("acurr");

    }
    // =================
    if(window.innerWidth<=700){
        nav.classList.add("fixed")
    }else
    if(window.pageYOffset>=550){
        nav.classList.add("fixed")
    }else{
        nav.classList.remove("fixed");
    }
    // =======================

});
function typeWords(){
    if(isDeleting && text.length ==0){
        idx = (idx+1) % names.length;
        word = names[idx];
        isDeleting = false;
    }

    if(text.length == word.length){
        isDeleting = true;
    }
      
    text = isDeleting ? word.substring(0 , text.length-1) : word.substring(0 , text.length+1);
    changingText.innerHTML = text;
    setTimeout(typeWords ,  text.length == word.length ? 1500 : 150);
}

    for(let i=0;i<5;i++){
        let x = navBarSlideA[i];
        x.addEventListener("click",function(){
            navBarSlide.classList.remove("active");
        })
    }
