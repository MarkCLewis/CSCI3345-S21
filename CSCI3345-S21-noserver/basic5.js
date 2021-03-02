// Tom, Kevin, Matthew, Aaron
'use strict';

let buttonClicks = 0;

const myButton = document.getElementById('myButton');
const myImg = document.getElementById('myImg');

myButton.addEventListener('click', () => {
    buttonClicks++;
    alert("Button clicked " + buttonClicks + " time(s). Don't stop!");

    myImg.src = 'http://placekitten.com/200/300?image=' + buttonClicks;
});
