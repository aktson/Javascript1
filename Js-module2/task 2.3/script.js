
//question 1
const btn = document.querySelector(".btn");

// btn.onclick = function () {
//     console.log("I'm a button");
// };

btn.addEventListener("click", buttonEvent);

function buttonEvent () {
    console.log("I'm a button");
} 

//question 2
const secondButton = document.querySelector("button[type = button]");
const input = document.querySelector("input");

const countedValue = document.querySelector(".count");

secondButton.addEventListener("click", function() {
  const typedValue = input.value.trim().length;
    countedValue.innerHTML = typedValue;
})
