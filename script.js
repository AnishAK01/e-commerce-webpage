let nextbutton = document.getElementById('next');
let prevbutton = document.getElementById('prev');
let backbutton = document.getElementById('back');
let seemore = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listHtml = document.querySelector('.carousel .car-list');

let filterReebok = document.getElementById("Reebok");
let filterCampus = document.getElementById("Campus");
let filterSparx = document.getElementById("Sparx");
let filterNike = document.getElementById("Nike");
let filterRedtape = document.getElementById("Redtape");
let filterPuma = document.getElementById("Puma");
let filterAddidas = document.getElementById("Addidas");

let cardReebok = document.getElementById("reebok");
let cardCampus = document.getElementById("campus");
let cardSparx = document.getElementById("sparx");
let cardNike = document.getElementById("nike");
let cardRedtape = document.getElementById("redtape");
let cardPuma= document.getElementById("puma");
let cardAddidas= document.getElementById("addidas");

let unAcceptClick; // Declare the variable here

function sortReebok(){
    filterReebok.onclick =()=>{
        cardCampus.style.display = "none";
        cardSparx.style.display = "none";
        cardNike.style.display = "none";
        cardRedtape.style.display = "none";
        cardPuma.style.display = "none";
        cardAddidas.style.display = "none";
        cardReebok.style.display ="block";
        
    }
    console.log("access r");
}
function sortNike(){
    filterNike.onclick =()=>{
        cardCampus.style.display = "none";
        cardSparx.style.display = "none";
        cardReebok.style.display = "none";
        cardRedtape.style.display = "none";
        cardPuma.style.display = "none";
        cardAddidas.style.display = "none";
        cardNike.style.display ="block";

        
    }
    console.log("access n");
}
function sortAddidas(){
    filterAddidas.onclick =()=>{
        cardCampus.style.display = "none";
        cardSparx.style.display = "none";
        cardNike.style.display = "none";
        cardRedtape.style.display = "none";
        cardPuma.style.display = "none";
        cardReebok.style.display = "none";
        cardAddidas.style.display ="block";

        
    }
    console.log("access ad");
}
function sortCampus(){
    filterCampus.onclick =()=>{
        cardReebok.style.display = "none";
        cardSparx.style.display = "none";
        cardNike.style.display = "none";
        cardRedtape.style.display = "none";
        cardPuma.style.display = "none";
        cardAddidas.style.display = "none";

        cardCampus.style.display ="block";

        
    }
    console.log("accessc");
}
function sortSparx(){
    filterSparx.onclick =()=>{
        cardCampus.style.display = "none";
        cardReebok.style.display = "none";
        cardNike.style.display = "none";
        cardRedtape.style.display = "none";
        cardPuma.style.display = "none";
        cardAddidas.style.display = "none";

        cardSparx.style.display ="block";

        
    }
    console.log("access s");
}
function sortRedtape(){
    filterRedtape.onclick =()=>{
        cardCampus.style.display = "none";
        cardSparx.style.display = "none";
        cardNike.style.display = "none";
        cardReebok.style.display = "none";
        cardPuma.style.display = "none";
        cardAddidas.style.display = "none";
        cardRedtape.style.display ="block";
        
    }
    console.log("access red");
}
function sortPuma(){
    filterPuma.onclick =()=>{
        cardCampus.style.display = "none";
        cardSparx.style.display = "none";
        cardNike.style.display = "none";
        cardRedtape.style.display = "none";
        cardReebok.style.display = "none";
        cardAddidas.style.display = "none";

        cardPuma.style.display ="block";

        
    }
    console.log("access p");
}

sortReebok();
sortNike();
sortAddidas();
sortCampus();
sortSparx();
sortRedtape();
sortPuma();

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



