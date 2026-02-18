// this is unrelated, just seeing if I can remember howt o

// example 1

// 1. create the element
const newH1 = document.createElement("h1");


// 2. add attributes/properties
newH1.textContent = "I like pizza!"
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center"

// 3. append element to DOM
//document.body.append(newH1); --  you can also prepend to get it in front of other elements

//document.getElementById("box1").append(newH1);

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2); //(newElement, currentElement)

const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[3]); -- if there's no id you use query selector and use the array spot

// remove HTML element 

// document.body.removeChild(newH1);

// example 2

const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightblue";

document.getElementById("fruits").prepend(newListItem);

const myImg = document.getElementById("myImg");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function(){

    // can you visibility or display - visibility will retain the space of the image

    if(myImg.style.display === "none"){
    myImg.style.display = "block";
    myBtn.textContent = "hide";
    }
    else{
    myImg.style.display = "none";
    myBtn.textContent = "show";
    }
   
})
