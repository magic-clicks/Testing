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

// Next script for practice doing resident result

const yesResident = document.getElementById("yesResident");
const noResident = document.getElementById("noResident");
const residentSubmit = document.getElementById("residentSubmit");
const residentResult = document.getElementById("residentResult");

residentSubmit.onclick = function(){
    if(yesResident.checked){
        residentResult.textContent = "You are within the elgibile population.";
    }
    else if(noResident.checked){
        residentResult.textContent = "You do not meet program requirements.";
    }
    else{
        residentResult.textContent = "Please answer the question.";
    }
}

const residentIncome = document.getElementById("residentIncome");
const incomeSubmit = document.getElementById("incomeSubmit");
const incomeResult = document.getElementById("incomeResult");

incomeSubmit.onclick = function(){
    income = residentIncome.value;
    income = Number(income);
    
    if(income <= 2500){
        incomeResult.textContent = "Your income is within the program limits!";
    }
    else if(income >= 2500){
        incomeResult.textContent = "You are over the income requirements";
    }
    else{
        incomeResult.textContent = "Please enter income";
    }
}

// practice for US Citizen

const yesCitzen = document.getElementById("yesCitzen");
const noCitzen = document.getElementById("noCitzen");
const citzenResult = document.getElementById("citzenResult");
const citizenSubmit = document.getElementById("citizenSubmit");

citizenSubmit.onclick = function(){
    if(yesCitizen.checked){
        citzenResult.textContent = "You are within the eligible population";
    }
    else if(noCitizen.checked){
        citzenResult.textContent = "You do not meet program requirements";
    }
    else{
        citzenResult.textContent = "Please make a seelection";
    }

}

// practice for caretaker

const yesCaretaker = document.getElementById("yesCaretaker");
const noCaretaker = document.getElementById("noCaretaker");
const caretakerResult = document.getElementById("caretakerResult");
const caretakerSubmit = document.getElementById("caretakerSubmit");

caretakerSubmit.onclick = function(){
    if(yesCaretaker.checked){
        caretakerResult.textContent = `You clicked on "Yes"`;
    }
    else if(noCaretaker.checked){
        caretakerResult.textContent = `You clicked on "No"`;
    }
    else{
        caretakerResult.textContent = "Please make a selection"
    }
}

// Next script ternary operator it's a shortcut to if and else statements
//helps to assign a veriabled based on a condition


//condition ? codeiftrue : codeiffale

let Age = 21;

let message = Age >= 18 ? "You're an adult" : "You're a minor";

console.log(message);

//This would be saying the exact same thing as:
// if (Age >= 18){
//    message = "You're an adult"
//}
//    else{
//        message = "You're a minor"
//    }

let Time = 16;
let greeting = time < 12 ? "Good morning" : "Good evening";
console.log(greeting);

let isAStudent = true;
let studentMessage = isAStudent ? "You are a student" : "You are NOT a student"
console.log(studentMessage);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);

// next script is ternary practice 

let dad = true;
let parentMessage = dad ? "You are a dad" : "You are not a dad";
console.log(parentMessage);

let mom = 50;
let grandma = mom >= 49 ? "You are a grandma" : "You are not a grandma";
console.log(grandma);

let golfSwing = 100; 
let driver = 10.5;
let threeWood = 15; 
let swingSpeed = golfSwing >= 100 ? driver : threeWood;
console.log(`With your swing speed you should use a ${swingSpeed} degree lofted club`); 

// next script is for Switches
//switch = can be efficient replacement to many else if statements 

let day = 5;

switch(day){
    case 1: 
        console.log("It is Monday")
        break;
    case 2:
        console.log("it is Tuesday")
        break;
    case 3: 
        console.log("It is Wednesday")
        break;
    case 4: 
    console.log("It is Thursday")
        break;
    case 5: 
    console.log("It is Friday")
        break;
    case 6: 
    console.log("It is Saturday")
        break;
    case 7: 
        console.log("It is Sunday")
        break;
    default:
        console.log(`${day} is not a day`)
}

let testScore = 92;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C"
        break;
    case testScore >= 60:
        letterGrade = "D"
        break;
    default:
        letterGrade = "F";


}

console.log(letterGrade);

// next script = string methods = allow you to manipulate and work with text (strings)

let userName = "Magic Clicks"

userName.charAt(0);
console.log(userName.charAt(0));

userName.indexOf("o");
console.log(userName.indexOf("c"));

userName = userName.toLocaleUpperCase();
console.log(userName);

userName = userName.toLocaleLowerCase();
console.log(userName);

userName = userName.repeat(3);
console.log(userName);

//this will read as a boolean

//userName = userName.startsWith("  ");
//console.log(userName);

let result = userName.startsWith(" ");

if(result){
    console.log("Your name cannot start with empty space");
}
else{
    console.log("Your name does not start with an empty space!");
}

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "")
console.log(phoneNumber);

//padStart and padEnd will add the character of your choice so like 
// phoneNumber.padEnd("15", "0") would add 0's at the end until it's 15 char long

// Next script string slicing = creating a substring
//                              from a portion of another string

const fullName = "Magic Clicks";

let firstName = fullName.slice(0,5);
let lastName = fullName.slice(6);

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);

// a better way to do this:

let first_name = fullName.slice(0, fullName.indexOf(" "));
let last_name = fullName.slice(fullName.indexOf(" ") +1);
console.log(first_name);
console.log(last_name);

// excercise

const email = "magicalclicks@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") +1);
console.log(username);
console.log(extension);

// practice 

const golfBall = "300 yards";
let taylormade = golfBall.replaceAll("yards", "");
console.log(taylormade);

// method chaining = calling one method after another in one continious line of code

// no method chaining 

// let name = window.prompt("Ente your username"); THIS IS AN ALERT

name = name.trim();
let letter = name.charAt(0);
letter = letter.toLocaleUpperCase();

let extraChars = name.slice(1);
extraChars = extraChars.toLowerCase();

name = letter + extraChars;
console.log(name);

// method chaining - combining steps and avoiding creating so many variables

name = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
console.log(name);

//practice 

//let married = window.prompt("Are you married?"); THIS IS AN ALERT

//married = married.trim().toLowerCase();
//console.log(married);

// logical operators = used to combine or manipulate boolean values (true or fale)
// and = &&
// OR = ||
// NOT = !

const temperature = 15;

if(temperature <= 0 || temperature > 30 ){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}

const isSunny = true;

if(!isSunny){
    console.log("It is Cloudy!");
}
else{
    console.log("It is Sunny!");
}


const eli = 7

if(eli <10 || eli  >5 ){
    console.log("Make sure Eli gets some food");
}
else{
    console.log("Eli is well fed");
}

// testing to see if I can use this with a label, input, and subimt button to
// generat reults on the webpage
// Doing a scenario like above but gonna make someone submit ash's weight

const ashWeight = document.getElementById("ashWeight");
const ashSubmit = document.getElementById("ashSubmit");
const ashResult = document.getElementById("ashResult");

// need to finish this and convert to a number 
ashSubmit.onclick = function(){
if(ashWeight <10 || ashWeight >5 ){
    ashResult.textContent = "Make sure Ash gets some food";
}
else if(ashWeight >10){
    ashResult.textContent = "ash is well fed";
}
else{
    ashResult.textContent = "Please enter ash's weight";
}
}

// = assignment operator
// == comparison operation (compares if values are equal)
// === strict sequality opeator (compare if values & datatype are equal)
// != inequality operator
// !== strict ineqaulity operator

const Pi = 3.14;

if(Pi !== "3.14"){
    console.log("That is Pi");
}
else{
    console.log("That is not Pi");
}

// remember the differene between values such as 3.14 and string values like "3.14"

//while loop = repeat some code WHILE some condition is true

let UserName = "Magic Clicks";

while(UserName == ""){
   user = window.prompt(`Enter your name`);

}
 console.log(`Hello ${UserName}`);

 let loggedIn = false;
 let login;
 let pass;

 while(!loggedIn){
    login = window.prompt(`Enter your login`);
    pass = window.prompt(`enter your pass`);

    if (login === `myUsername` && pass == `myPassword`){
        loggedIn = true; // since this makes it it true the !loggedIn while loop is no longer valid
        console.log("You are logged in");
    }
    else{
        console.log("Invalid Credentials");
    }
 }

 
