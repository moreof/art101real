console.log('Hello!')

function getNameDisplay(){
    //prompt user to input name
    let name = window.prompt("Name please:");
    //change text of h1
    $('#title').html("Hello, " + name);
}

$("#my-button").click(getNameDisplay);
