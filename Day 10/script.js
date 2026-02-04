const head = document.getElementById("heading");
console.log(head.innerText) //it will only show the visible text
console.log(head.textContent) //it will show all the text including hidden text
console.log(head.innerHTML) //it will show all the text with its tag/element

// DOM MODIFICATION
// CREATE A NEW ELEMENT AND SET ITS CONTENT
const newParagraph = document.createElement("p");
newParagraph.textContent="this is a dynamically created paragrapgh.";
console.log(newParagraph.textContent);

//APPEND THE NEW ELEMENT TO THE CONTAINER
const container = document.getElementById("container");
container.appendChild(newParagraph);

const para = document.querySelector("#container p");
para.remove();

//Alternate method
// document.querySelector("#container p").remove();

let date = new Date()
console.log(date);

setTimeout(()=>{
    {"Welcomeee"};
    alert ("OFFER IS VALID");
},1000)
setInterval(()=> {
    let date = new Date()
console.log(date);

},2500)
//EVENT HANDLE
function handleClick() {
    document.getElementById("output").textContent="Button clicked!";
}

