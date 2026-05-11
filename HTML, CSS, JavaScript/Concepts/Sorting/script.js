// sort() = method used to sort elements of an array in place
// sorts elements as strings in lexicographic order, NOT alphabetical 
// lexicographic = (alphabet + numbers + symobls) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();

console.log(fruits);

let numbers = [1, 4, 10, 420, 69, 21, 67];

numbers.sort((a, b) => a - b); // this is how you sort numbers 

// it's looking at a then b over and over again so like 1 then 4 then 4 then 10 then 10 etc

console.log(numbers);

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}]

people.sort((a, b) => a.age - b.age); // this for example would sort by age
people.sort((a, b) => a.gpa - b.gpa); // this would sort by gpa
people.sort((a, b) => a.name.localeCompare(b.name)); // this would sort by name
// you have to use localeCompare to sort the string

console.log(people);