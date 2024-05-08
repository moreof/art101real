/*
   lab9.js - JavaScript/jQuery script to use buttons to modify elements on a page
   Requirements: jQuery must be loaded for this script to work.
   Author: Morris Carmichael
   Date: 5/7/2024
*/
//Add Buttons: Using jQuery, append buttons to your challenge, problems, and results sections of your document.
//add buttons to sections
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");
$("#reflection").append("<button id='button-reflection'>Make Special</button>");
//Add an Event Listener: Add an click listener to each button. Here's one:
// add a click listener to the challenge button
$("button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});
$("button-problems").click(function(){
    $("#problems").toggleClass("special");
});
$("button-results").click(function(){
    $("#results").toggleClass("special");
});
$("button-reflection").click(function(){
    $("#reflection").toggleClass("special");
});