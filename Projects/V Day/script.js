
const yes = document.getElementById("yesBtn");
const no = document.getElementById("noBtn");
const question = document.getElementById("question");

let clicked = false;


yes.addEventListener("mouseover", function(){
    no.style.display = "none";
})

yes.addEventListener("click", function(){
    yes.textContent = "I Love You";
    clicked = true;
    no.style.display = "none";
    question.textContent = "💘";
}) 

yes.addEventListener("mouseout", function(){
    
    if(clicked === true){
        no.style.display = "none";
    }
    else{
        no.style.display = "";
    }
    
})


