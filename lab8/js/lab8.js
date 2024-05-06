//Lab 8 - Anonymous Functions and Callbacks
//Morris Carmichael
//Create an array of numbers and assign it to a variable
let numArray = [2, 9, 5]
//Create a function that finds the square root of a number from the array
function squareRoot (x) {
    var results = Math.sqrt(x);
    return results;
}
//special thanks to WesBot for reminding me how to reference variables from array in console correctly
//and to DeepAI for introducing me to, and W3 for helping me understanding, arrow functions
//Use map on your array using your function as a callback to operate on all the numbers in your array.
var divided = numArray.map((x) => x / 2);
//Set a variable for the results of the function on the map
var mapResults = numArray.map(divide)