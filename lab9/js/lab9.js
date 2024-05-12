/*
   lab9.js - JavaScript/jQuery script to use buttons to modify elements on a page
   Author: Morris Carmichael
   Date: 5/7/2024
*/
//add buttons to sections
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");
$("#reflection").append("<button id='button-reflection'>Make Special</button>");
// add click listener to buttons and toggle classes
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