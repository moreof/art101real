/*
   lab9.js - JavaScript/jQuery script to use buttons to modify elements on a page
   Author: Morris Carmichael
   Date: 5/7/2024
*/
//add buttons to sections
$(".minor-section").append("<button class='button-challenge'>Make Special</button>");
// add click listener to buttons and toggle classes
$(".button-challenge").click(function(){
    $(this).parent().toggleClass("minor-section special");
});