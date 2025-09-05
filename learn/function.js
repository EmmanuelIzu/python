const arryofNames = ['emmanuel','Izuchukwu','nkwocha','chidinma', 'precious'];

const arti = document.createElement('article');
const unorderedls = document.createElement('ul')


arryofNames.forEach(element => {
    const newlist = document.createElement('li');
    newlist.innerHTML = element;
    unorderedls.append(newlist);
});


arti.append(unorderedls)

const main = document.querySelector("main");

main.append(arti)


const arryofNames = ['emmanuel','Izuchukwu','nkwocha','chidinma', 'precious'];
const arryofNames2 = ['emmanuel','Izuchukwu','nkwocha','chidinma', 'precious'];

const hold = [arryofNames,arryofNames2];

let newarr2 = hold.map((element) => {
    let insidearr = element.forEach(element => {
        console.log(element)
    });
});


const add = function(){};

const sub = () =>{};

function mul(){};



(function(){})();