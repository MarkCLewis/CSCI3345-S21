//Raini Huynh, Lizzie Ruetschle, James S. Rosser, Vasti Sarai Rios Rios
"use strict"

let answers = ["yes", "no", "maybe", "soon?", "unsure", "ask again later"];
function magic8ball() {
    let temp = Math.floor(Math.random() * answers.length);
    document.getElementById("8BallAnswer").innerHTML = answers[temp];
}

