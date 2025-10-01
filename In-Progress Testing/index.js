//const = a variable that can't be changed

// Next script for radius of a circle

const PI = 3.14159
let radius;
let circumference;


radius = Number(radius);

circumference = 2 * PI * radius;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";

}

const submitReset = document.getElementById("submitReset");
let myText = document.getElementById("mytext");

submitReset.onclick = function(){
    document.getElementById("myH3").textContent = "";
    document.getElementById("myText").value = "";
}


// Next Script for number counter

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0

increaseBtn.onclick = function(){
    count ++;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count --;
    countLabel.textContent = count;
}

// Next script for random number generator 

//let min = 50;
//let max = 100;

//let randomNum = Math.floor(Math.random() * (max -min)) + min;

//console.log(randomNum);

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function (){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}

