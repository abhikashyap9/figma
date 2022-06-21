// console.log('running');
"use strict";

let slides=document.querySelectorAll('.maincarousel');
let slidebuttons=document.querySelector('.sliderbuttons');
let span=slidebuttons.querySelectorAll('span');



let num=0;
slider(slides,num);


function number(n){
console.log(n);
num=n;
slider(slides,num);
}

function increment(){
  num=num+1; 
  if(num>=slides.length){
   num=0
  }
  
  slider(slides,num); 
}

function decrement(){
    num=num-1;
    if(num<0){
      num=slides.length-1;
    }
    console.log(num);
    slider(slides,num);
    
}

function slider(slides,num){
    let i=0;
    for(i=0;i<slides.length;i++){
        slides[i].style.display='none';
        span[i].classList.remove('active');
    }
       
    for(i=0;i<slides.length;i++){
        let x=window.matchMedia("(max-width:600px)");
        // console.log(x);
        span[num].classList.add('active');

        if(x.matches){
          slides[num].style.display='block';
        }
        else{
          slides[num].style.display='';
        }
    }
       
}

setInterval(increment,3000);

let select=document.querySelector('.navsetting');
let main=document.querySelector('.main');
console.log(select);
console.log(main);


// Debounce Function
function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;
	    
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;	
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};



let returnedFunction=debounce(function(){
    let toggle=document.querySelector('.navbartoggler');
    console.log(toggle); 
    let x=window.innerWidth;


    if(x<850){
      select.style.display='none';
      main.style.justifyContent='space-between';
      toggle.style.display='';
      here.style.display='none';
      
    }
    
    else if(x>850){
      select.style.display='';
      main.style.justifyContent='';
      toggle.style.display='none';
      here.style.visibility='hidden';
      here.style.display='none';
    }    
},250)
returnedFunction();
window.addEventListener('resize',returnedFunction);





// Toggle Functionality
let toggler=document.querySelector('.navbartoggler');

let here=document.querySelector('.here');
here.style.visibility='hidden';
toggler.addEventListener('click',function a(){


if(here.style.visibility=='hidden'){
here.style.visibility='visible';
here.style.display='';
}
else{
  here.style.visibility='hidden';
  here.style.display='none';
}
})


