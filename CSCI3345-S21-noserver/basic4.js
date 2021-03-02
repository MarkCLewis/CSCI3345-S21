/* Kevin D. Crusius, Morgen Halle, Connor W. Weisenberger, Matthew R. Barton */
"use strict"
let xPos = 500;
let yPos = 500;
function moveBtn() {
    const btn = document.getElementById("button");
    xPos += Math.random() * 200 - 100;
    xPos = Math.max(0, xPos);
    btn.style.left = xPos + "px";
    yPos += Math.random() * 200 - 100;
    yPos = Math.max(0, yPos);
    btn.style.top = yPos + "px";
}
