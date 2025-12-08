// rest parameters = (...rest) kind of the opposite of spread 
// spread expands the array, and rest budles elements back into an array


function openFridge(...meats){ // this is rest 
    console.log(...meats); // this is spread
}

function getFood(...meats){
    return meats;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

const meats = getFood(food1, food2, food3, food4, food5);
console.log(meats);

//example 2

function sum(...numberz){
    let result = 0;
    for(let number of numberz){
        result += number;
    }
    return result;
}
const sumResult = sum(1, 2, 3, 4, 5);
console.log(`Your total is $${sumResult}`);

//example 3 

function getAverage(...numberz){
    let result = 0;
    for(let number of numberz){
        result += number;
    }
    return result / numberz.length;
}
const sumAverage = getAverage(75, 100, 85, 90, 50);
console.log(`Average test score is: ${sumAverage}`);

//example 4

function combineString(...stringz){
    return stringz.join(" ");
}

const realName = combineString("Mr", "Spongebob", "Squarepants", "III");

console.log(realName);


