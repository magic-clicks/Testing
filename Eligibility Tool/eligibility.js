console.log("test");

const yesResident = document.getElementById("yesResident");
const noResident = document.getElementById("noResident");
const yesCit = document.getElementById("yesCit");
const noCit = document.getElementById("noCit");
const yesCTM = document.getElementById("yesCTM");
const noCTM = document.getElementById("noCTM");
const yesMinor = document.getElementById("yesMinor");
const notMinor = document.getElementById("notMinor");
const yesPregnant = document.getElementById("yesPregnant");
const notPregnant = document.getElementById("notPregnant");
const yesBCC = document.getElementById("yesBCC");
const notBCC = document.getElementById("notBCC");
const yesFoster = document.getElementById("yesFoster");
const notFoster = document.getElementById("notFoster");

const toolResult = document.getElementById("toolResult");


function eligibility(){

let eligible = true;

if (yesResident.checked) eligible = true;
if (yesCit.checked) eligible = true;
if (yesCTM.checked) eligible = true;
if (yesMinor.checked) eligible = true;
if (yesPregnant.checked) eligible = true;
if (yesBCC.checked) eligible = true;
if (yesFoster.checked) eligible = true;
if (noCit.checked) eligible = false;
if (noResident.checked) eligible = false;

    if(eligible){
        toolResult.textContent = "You are within the eligible population!";
    }
    else{
        toolResult.textContent = "You are NOT within the eligible population";
    }

}

//document.getElementById("toolSubmit").onclick = function(){
//    eligibility;
//}

// writing thoughts down - what if I write up each checked property as its own function
// and then I write the submit button to run each funtion in succession as long as they keep passing
// that might be the most legit way to do it

// decided to try and write it differently that mentioned above using booleans