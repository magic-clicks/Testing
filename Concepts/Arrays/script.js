// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits.push("coconut"); // this adds one to the end
console.log(fruits);

fruits.pop(); // this removes the last one
console.log(fruits);

fruits.unshift("mango"); // this adds one to the beggining
console.log(fruits);

let numOfFruits = fruits.length; // this is how you get an array length
console.log(numOfFruits);

let index = fruits.indexOf("apple"); // this lets you find the position of something in the array
console.log(index);

fruits.sort();
console.log(fruits);

// 2D arrays = multi-dimensional array that stores a matrix 
// of data in rows and columns
// useful as games, spreadsheets, or representing images

// x, o, x
// o, x, o
// x, o, x

const matrix = [[1, 2, 3],
                [4, 5, 6,],
                [7, 8, 9]];

matrix[0][0] = `X`;
matrix[0][1] = `O`;
matrix[0][2] = `X`;

matrix[1][0] = `O`;
matrix[1][1] = `X`;
matrix[1][2] = `O`;

matrix[2][0] = `X`;
matrix[2][1] = `O`;
matrix[2][2] = `X`;


for(let row of matrix){
    const rowString = row.join(` `);
        console.log(row);
}

