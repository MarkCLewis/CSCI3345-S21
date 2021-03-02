/*Emma N. Miller, Chet O. Fagerstrom, Jazmine M. Kibet, Kurt D. Hardee */
"use strict"
function handleClick(text) {
  var newtext = document.createTextNode(text),
      p1 = document.getElementById("p1");

  p1.appendChild(newtext);
}
