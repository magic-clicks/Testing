console.log("test");

const yesResident = document.getElementById("yesResident");
const noResident = document.getElementById("noResident");
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