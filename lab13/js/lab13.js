//lab 13
//this javascript file displays numbers 1-200 and the text the user assiigns based on their multiplication factors when the user activates the input
//morris carmichael
//6/5/2024
//
//get input elements and output
var numInputs = document.querySelectorAll("input[type='number']");
var textInputs = document.querySelectorAll("input[type='text']");
var outputDiv = document.getElementById("output");

//add event listener to submit button
document.getElementById("submit").addEventListener("click", function() {
  var numValues = [];
  var textValues = [];
  for (var i = 0; i < numInputs.length; i++) {
    numValues.push(Number(numInputs[i].value));
    textValues.push(textInputs[i].value);
  }

  // loop numbers and create output
  var output = "";
  for (var i = 1; i <= 200; i++) {
    output += i + " ";
    var result = "";
    for (var j = 0; j < numValues.length; j++) {
      if (i % numValues[j] === 0) {
        result += textValues[j];
      }
    }
    if (result === "") {
      result += "";
    }
    output += result + "<br>";
  }
  //HTML content output div
  outputDiv.innerHTML = output;
});