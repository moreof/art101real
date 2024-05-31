/* create a function that sorts a string and operates on it to return a conditional output and displays sorting into assigned 'house'
  Morris Carmichael
  5/28/2024
*/
//define the function
function sortingHat(str) {
    let length = str.length;
    let mod = length % 4;
    if (mod = 0) {
      return "Gryffindor";
    } else if (mod === 1) {
      return "Ravenclaw";
    } else if (mod === 2) {
      return "Slytherin";
    } else {
      return "Hufflepuff";
    }
  }
  //activate function with button and use input
  document.getElementById("button").addEventListener("click", function() {
    let name = document.getElementById("input").value;
    let house = sortingHat(name);
    let output = document.getElementById("output");
    output.innerHTML = "<p style='color: blue; font-size: 16px'>The Sorting Hat has sorted you into " + house + "</p>";
  })