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

    if(yesResident.checked){
        toolResult.textContent = "You are within the eligible population!";
    }
    else{
        toolResult.textContent = "You are NOT within the eligible population";
    }

}

// writing thoughts down - what if I write up each checked property as its own function
// and then I write the submit button to run each funtion in succession as long as they keep passing
// that might be the most legit way to do it