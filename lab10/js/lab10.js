/*
   lab10.js - This simple JavaScript/jQuery script appends new elements to an output div
   This script adds a function to generate a random selection of text and display it beneath the button
   Requirements: jQuery must be loaded for this script to work.
   Author: Morris Carmichael
   Date: 5/16/2024
*/
//define function to produce text
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    //generate random text
    return text.slice(randStart, randStart + randLen);
  }
  //click listener for button
$("#make-convo").click(function (){
    console.log("Hello!")
    //generate new text
    const newText = generateRandomText();
    // append new div to output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });