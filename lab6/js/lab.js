// index.js - Lab 6: Arrays and Objects
// Author: Morris Carmichael
// Date:4/27/2024

//Variables
myTransport = ["Bike", "Car", "Bus", "Walking"];

//Object
myMainRide = {
make: "Toyota",
model: "Camry",
color: "black",
year: "1992"
}

//Object Age Program
currentYear = "2024"
age = function() {
  return year - currentYear
}

//Output
document.writeln("How I Get Around:" + myTransport + "<br>" );
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>")

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
