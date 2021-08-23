//lesson task 2.1

//question 1
// function receivingFunction(arg) {
//     if (typeof arg ===  "function") {
//         arg();
//     }
//     else {
//         console.log ("not a function")
//     }

// }

// function callbackFunction() {
//  console.log ("I am a callback function");
// }
// console.log(receivingFunction("ankit"));
 
//question 2
// const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

// for (let i = 0; i < prizes.length; i++) {
//     console.log(`Prize ${i+1}: ${prizes[i]}`);
// }

// prizes.forEach(function(prize, index) {
// console.log (`Prize ${index+1}: ${prize}`);
// })

// //question 3
// const numberöfSeconds = 1;

// function myString (){
//     console.log(`I waited ${numberöfSeconds} seconds`);
// }

// setTimeout(myString, numberöfSeconds * 1000);

// question 4
// let counter = 0;
// const limit = 4;
// const interval = 1500;

// function logSomething () {
//     counter++;
//     console.log(counter);
//     if (counter === limit) {
//         clearInterval(intervalId);
//     }
// }

// const intervalId = setInterval(logSomething, interval);

//lesson task 2.2

// const button = document.querySelector("button");
// const countContainer = document.querySelector(".count");


// let counter = 0;


// button.onclick = function() {

// button.disabled = true;
 
// const intervalId = setInterval(countNumbers, 500);

// function countNumbers () {
//     counter++;
//     countContainer.innerHTML = counter;
//         if (counter === 7) {
//         button.disabled = false;
//         clearInterval(intervalId);
//         }
//     }
// }

const button = document.querySelector("button");
const subMenu = document.querySelector(".sub-menu");


button.addEventListener("click", function() {

    subMenu.classList.toggle("hidden");
});

// button.addEventListener("mouseover", function() {
//     subMenu.classList.remove("hidden");
// })
// button.addEventListener("mouseleave", function() {
//     subMenu.classList.add("hidden");
// })

