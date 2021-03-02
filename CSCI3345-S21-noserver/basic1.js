/* James S. Rosser, Aaron M. Feleke, Dane S. Claessen, Christian M. Tatu */
"use strict";

function onClick() {
    console.log("You pushed the button!");
    let cursed = document.createElement("marquee"); 
    let mText = document.createTextNode("SPOOKY"); 
    let marquee = document.getElementById("demo"); 
    marquee.appendChild(cursed); 
    cursed.appendChild(mText);
}







