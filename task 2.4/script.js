

const button = document.querySelector("button");
const counter = document.querySelector(".counter");
const inputs = document.querySelector(".inputs");

let intervalId;
let count;

button.addEventListener("mousedown", mouseDownEvent);
button.addEventListener("mouseup", mouseUpEvent);


//function for mousedown event
function mouseDownEvent() {

count = 0;
button.innerHTML = "Release to stop counting";
inputs.innerHTML = "";
intervalId = setInterval(countNumbers, 1000);

function countNumbers() {
    count++;
    counter.innerHTML = count;
}
}

//function for mouseup event
function mouseUpEvent() {
    button.innerHTML = "Press and hold to count";
    clearInterval(intervalId);
    
    
    for (let i = 1; i <= count; i++) {
        
        inputs.innerHTML += `<p class ="input"> input ${i} </p>`
        
    }
};
