// NodeList = static collection of HTML elements by id, class, element
// can be created by using queryselectorall()
// similar to an array, but no map, filter, reduce
// NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// add an element

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

// add HTML/CSS properties in a node list

buttons.forEach(button =>{
    button.style.backgroundColor = "green";
    button.textContent += " 😀";
})

// traditional way without arrow function
buttons.forEach(function(element){
    element.style.color = "white";
})

// click event listner

buttons.forEach(button => {
    button.addEventListener("click", function(){
        event.target.style.backgroundColor = "tomato";
    })
})

// mouseover and mouseout event listenr

buttons.forEach(button => {
    button.addEventListener("mouseover", function(){
        event.target.style.backgroundColor = "lightblue";
    })
})

buttons.forEach(function(button){
    button.addEventListener("mouseout", function(){
        button.style.backgroundColor = "green";
    })
})


