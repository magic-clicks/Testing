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