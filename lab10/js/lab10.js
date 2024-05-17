/*
   lab10.js - This simple JavaScript/jQuery script appends new elements to an output div
   This script adds a function to generate a random selection of text and display it beneath the button
   Requirements: jQuery must be loaded for this script to work.
   Author: Morris Carmichael
   Date: 5/16/2024
*/
//define function to produce text
function generateRandomText() {
    const text = "My name is Mud My name is Mud Not to be confused with Bill, or Jack, or Pete, or Dennis My name is Mud, it's always been 'Cause I'm the most boring sonsabitch you've ever seen I dress in blue, yes, navy blue from head to toe I'm rather drab, except my patent shoes I make 'em shine, well, most the time 'Cept today, my feet are troddin' on by this friend of mine Six foot two, and rude as hell I got to get him in the ground before he starts to smell My name is Mud  My name is Mud But call me Aloysius Devadander Abercrombie That's long for Mud, so I've been told Told that by this sonsabitch that lies before me bloated, blue and cold I've got my pride, I drink my wine I'd drink only the finest 'cept I haven't earned a dime in several months, or were it years? The breath on that fat bastard could bring any man to tears We had our words, a common spatSo I kissed him upside the cranium with that aluminum baseball bat My name is Mud My name is Mud M-M-M-M-M-M-M-Mud My name is Mud";
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