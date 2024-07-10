let nextbutton = document.getElementById('next');
let prevbutton = document.getElementById('prev');
let backbutton = document.getElementById('back');
let seemore = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listHtml = document.querySelector('.carousel .car-list');
let unAcceptClick; // Declare the variable here


nextbutton.onclick = ()=>{
    showSlider('next');
}
prevbutton.onclick = ()=>{
    showSlider('prev');
}
const showSlider = (type)=>{
    nextbutton.style.pointerEvents = "none";
    prevbutton.style.pointerEvents = "none";
    carousel.classList.remove('prev','next');
    let items = document.querySelectorAll('.carousel .car-list .items');
    if(type === 'next'){
        listHtml.appendChild(items[0]);
        carousel.classList.add('next');
    }
    else{
       let positionlast =items.length-1; 
       listHtml.prepend (items[positionlast]);

    }
    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(()=>{
        nextbutton.style.pointerEvents='auto';
        prevbutton.style.pointerEvents='auto';
        
        
    },1000);
}



