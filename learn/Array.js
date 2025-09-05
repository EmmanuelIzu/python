//PUSH("") add at the end, POP() removes last item, SHIFT() removes first item, UNSHIFT("") add at beginning
const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "laptop",
    "light bulb",
    "USB drive",
    "elephant"
];

let newDeskArr = [...deskArray]

newDeskArr.pop()
newDeskArr.sort()

newDeskArr.forEach(element => {
    console.log(element)
});

console.log("      ")

newDeskArr.unshift(newDeskArr.pop());

newDeskArr.forEach(element => {
    console.log(element)
});


newDeskArr.forEach(element =>{
        if(element === "USB drive"){
            newDeskArr.splice(newDeskArr.indexOf(element),1);
            newDeskArr.push(element);
        }
    })

console.log("      ")

newDeskArr.forEach(element => {
    console.log(element)
});


newDeskArr.forEach(element =>{
        if(element === "laptop"){
            newDeskArr.splice(newDeskArr.indexOf(element),1);
        }
    })

console.log("      ")

newDeskArr.forEach(element => {
    console.log(element)
});