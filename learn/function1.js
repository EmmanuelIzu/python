
const clickme = document.querySelector('.btn-blue');
const number = document.querySelectorAll('.number');
const increase = document.querySelector('.btn-green');
const decrease = document.querySelector('.btn-red');
const changecolor = document.querySelector('.btn-orange');
const container = document.querySelector('.container');


var incrementnum = 0;

clickme.addEventListener('click',() =>{
    incrementnum = 0
    number[0].innerText = incrementnum;
}, false);


increase.addEventListener('click',() =>{
    if (incrementnum > 0){
        container.classList.remove("btn-orange");
    }
    incrementnum = incrementnum + 1;
    number[0].innerText = incrementnum;
}, false);

decrease.addEventListener('click',() =>{
    if (incrementnum <= 0 && (container.classList.contains("btn-ornage") == false)){
       container.classList.add("btn-orange"); 
    }
    incrementnum = incrementnum - 1;
    number[0].innerText = incrementnum;
}, false);


changecolor.addEventListener('click',() =>{
   container.classList.toggle("btn-orange");
}, false);


window.addEventListener('keypress',(event) =>{
    console.log(this)
}, false);


// Listen for a custom event


// const arr = document.querySelectorAll('form');
// const arrp = document.querySelectorAll('span.value')

// arr.forEach((element,index) => {
//     element.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const inputf = element.querySelector('input');
//         arrp[index].innerText = inputf.value

//     },)
    
// });

