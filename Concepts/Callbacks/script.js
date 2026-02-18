// callback = a function that is passed as an argument to another function.

// used to handel asynchronus operations:
// 1. Reading a file
// 2. Newtwork requests
// 3. Interacting with databses

// "Hey when you're done, call this next"

hello(leave); //type the other function into the arguement 

function hello(callback){
    console.log("Hello");
    callback();
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}

// funciton to sum two numbers together

sum(displayPage, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;

}
