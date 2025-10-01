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

// Next script for if statements - if statements = if a condition is true
//execute some code. If not, do something else.

let age = 18;

if( age >= 18){
    console.log("You are old enough to enter this site");
}
else {
    console.log("You must be 18+ to enter this site");
}

//it's a fork in the road

let time = 9;

if(time < 12){
    console.log("Good Morning");
}
else{
    console.log("Good Afternoon");
}

let isStudent = false;
if(isStudent){
    console.log("You are a student");
}
else{
    console.log("You are not a student");
}


let hasLicense = false;

if(age > 16){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("You have your license")
    }
    else{
        console.log("You do not have your license")
    }
    
}
else{
    console.log("You must be 16+ to drive");
}



const ageBox = document.getElementById("ageBox");
const ageSubmit = document.getElementById("ageSubmit");
const resultElement = document.getElementById("resultElement");

ageSubmit.onclick = function (){
    age = ageBox.value;
    age = Number(age);
    
    if(age == 0){
        resultElement.textContent = "You can't enter. You were just born!";
    }
    else if(age <0){
        resultElement.textContent = "Your age can't be below 0";
    }
    else if(age >=100){
        resultElement.textContent = "You are too old to enter this site";
    }
    else if(age == 69){
        resultElement.textContent = "Lmao";
    }
    else if(age >= 18){   
    resultElement.textContent = "You are old enough to enter this site";
    }
    
    else{
        resultElement.textContent = "You must be 18+ to enter this site";
    }
}

// Next script for checked property

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn= document.getElementById("visaBtn");
const masterCardBtn= document.getElementById("masterCardBtn");
const payPalBtn= document.getElementById("payPalBtn");
const mySubmitBtn= document.getElementById("mySubmitBtn");
const subResult= document.getElementById("subResult");
const paymentResult= document.getElementById("paymentResult");

mySubmitBtn.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed!";
    }
    else{
        subResult.textContent = "You are NOT subscribed!";
    }

   if(visaBtn.checked){
    paymentResult.textContent = "You are paying with Visa";
   }
   else if(masterCardBtn.checked){
    paymentResult.textContent = "You are paying with MasterCard";
   }
   else if(payPalBtn.checked){
    paymentResult.textContent = "You are paying with PayPal";
   }
   else{
    paymentResult.textContent = "You have not selected a payment type";
   }
  
}