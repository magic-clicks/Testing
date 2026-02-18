// spread operator = ... allows an iterable usch as an array or string to be expanded
// into sperate elements 

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); //opening up the box and unpacking the contents
let minimum = Math.min(...numbers);
console.log(maximum);
console.log(minimum);

let testingName = "magic clicks"
let letters = [...username];

console.log(letters);

let fruit = ["apple", "orange", "banana"];
let newFruit = [...fruit];

console.log(fruit);
console.log(newFruit);

let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruit, ...vegetables]; // can also add in string values here

console.log(foods);

