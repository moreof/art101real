//Lab 7 - Functions
//Morris Carmichael
//Function to receive and display user input
function greetName () {
    //receives and logs user name
    var userName = window.prompt("What's your name?");
    console.log("userName =", userName);
    //splits user name into array
    var array = userName.split('')
    console.log("array =", array);
    //sorts name array    
    var sortedArray = array.sort()
    console.log("sortedArray =", sortedArray)
    //rejoins array as sorted string and returns
    var sortedName = sortedArray.join('')
    console.log("sortedName =", sortedName)
    //returns sorted name
    return sortedName;
  }

  //outputs sorted name
  document.writeln ("I think this name is better: ",
    greetName(''), "</br");