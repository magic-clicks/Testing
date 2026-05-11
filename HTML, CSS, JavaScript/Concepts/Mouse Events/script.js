// eventListner = listen for a speficic events to create interactive web pages
 // events: click, mouseover, mouseout
 // addEventListner (event, callback);

 const myBox = document.getElementById("myBox");

 function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 😥"
 }

 myBox.addEventListener("click", changeColor)

const box = document.getElementById("yourBox");


box.addEventListener("click", function(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 😥";
})

box.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it!";
})

box.addEventListener("mouseout", function(event){
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "CLICK ME";
})

