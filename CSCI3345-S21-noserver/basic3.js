
/*Caden Young, Arjun Thakar, Paul Abila, Alexandra N. Walker*/

"use strict"

let alpha = ['A','B','C','D','E','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];

function randCharGen(){
    let temp = Math.floor(Math.random * 27);
    return alpha[temp];
}

function createStr(i, sent){
    if(i > 25) return ""
    else return (i+1,sent + randCharGen);

}

let strRand = createStr(0,"");

let newElem = document.createTextNode(strRand);
