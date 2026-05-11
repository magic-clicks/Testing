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
