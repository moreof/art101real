// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

/*
$(button-challenge.button).click(function(){
    $(this).parent().toggleClass("minor-section");
    $(this).parent().toggleClass("special");
})
*/

//Hint 3: Within a jQuery callback the keyword $(this) refers to the thing being selected. 
//The jQuery method .parent() selects the parent of the selected element. 
//So within the callback, we can use $(this).parent() to select the section that the button is in!
/*
$("#button-challenge").click(function(){
    $("#challenge").toggleClass("minor-section");
    $("#challenge").toggleClass("special");
});
$("#button-problems").click(function(){
    $("#problems").toggleClass("minor-section");
    $("#problems").toggleClass("special");
});
$("#button-reflection").click(function(){
    $("#reflection").toggleClass("minor-section");
    $("#reflection").toggleClass("special");
});
$("#button-results").click(function(){
    $("#results").toggleClass("minor-section");
    $("#results").toggleClass("special");
});
*/