/*
   lab11.js - this script gets a value from the input field and outputs a modified version.
   jQuery must be loaded for this script to work.
   Author: Morris Carmichael
   2024
*/
// sort characters of string in alphabetical order.
function sortString(inputString) {
    //convert string to array and back to sort
    return inputString.split('').sort().join('');
  }
  // click listener for button
$("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    // sort
userNameSorted = sortString(userName);
// append new div to output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});