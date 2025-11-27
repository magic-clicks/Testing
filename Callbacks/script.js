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