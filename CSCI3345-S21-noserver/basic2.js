/* Hans E. Fulton, Sabrina R. Whitney, Benjamin J. Malik, Emerson E. Spradling */
//js that adds a new element to our page, or element that is added or removed when something is clicked
"use strict"
alert("!!");

document.GetElementById("textbutton").onclick = displayText();


function displayText() {
    var tag = document.createElement("p");
    var text = document.createTextNode("Hello Nearby");
    var text2 = document.createTextNode("Are we doing this right");
    tag.appendChild(text);
    tag.appendChild(text2);
    var elem = document.GetElementById("textbutton");
    elem.appendChild(tag);
}
//I think """"MAYBE"""" if we add an action to the 
//button tag we made in the html doc we can call 
//this script as a src

// https://stackoverflow.com/questions/24032058/use-a-button-to-call-a-javascript-file-in-html
// ¯\_(ツ)_/¯
