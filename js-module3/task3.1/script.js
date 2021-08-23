//lesson task 1

//question 1
const checkTruthyValue = "2";

if (checkTruthyValue) {
    console.log("Truthy")
} else {
    console.log("falsy")
}

//question 2
//Based on the below URL, what are the different querystring parameters and their respective values?
//https://api.rawg.io/api/games?platforms=4&genres=action&publishers=354

//querystring parameters are "platforms", "genres" and "publishers"
//ressepctive values are "4", "action" and "354"

//question 3


async function getCatFacts() {
    const url = "https://v6.exchangerate-api.com/v6/4bfbe7556da5d07eb1f07361/latest/usd";

    const response = await fetch(url);

    const results = await response.json();
    console.log (results);
    console.log (results.conversion_rates);
    const conversionRate = results.conversion_rates;


for (let i = 0; i < conversionRate.length; i++) {
console.log(conversionRate)
}

//     conversionRate.forEach(function(rate) {
//     console.log(rate);
// })
}
getCatFacts();


