// destructuring = extract values from arrays and objects, 
// then assign them to variables in a convienent way
// [] = to perform array destructing
// {} = to perform object destructing 
// 5 examples

//example 1
//swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// example 2 
// swap 2 elements in an array

const colors = ["red", "greem", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//example 3 
// assign array elements to variables

const color = ["red", "greem", "blue", "black", "white"];

const[firstColor, secondColor, thirdColor, ...extraColors] = color;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//example 4 
//extract values from objects

const person1 = {
    firstName: "Spongbob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 35,
}

const{firstName, lastName, age, job = "Unemployed"} = person1

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// exmaple 5 
// destructure in funciton paremeters

function displayPerson({firstName, lastName, age, job="unemployed"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`Job: ${job}`);
}

displayPerson(person1);