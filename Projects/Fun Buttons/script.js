console.log('test');

const button = document.getElementById("myButton");

const messages = [
    "Haha you clicked me",
    "Clicky",
    "Click me again!",
    "You're a sicko!",
    "Click me",
    "This is a button",
    "Can't believe it's not butter",
    "Try clicking another button!",
     "Haha you clicked me!",
    "Stop it, I'm ticklish!",
    "Clicky clicky!",
    "Do you really want to do this?",
    "Why are you like this?",
    "You again?!",
    "I feel loved...",
    "One more time won’t hurt… maybe",
    "Careful, it bites!",
    "You're relentless!",
    "Don't tell anyone, but I like it",
    "Click me harder!",
    "Seriously, stop clicking me",
    "I’m not a toy… am I?",
    "You’re testing my patience",
    "I’ve seen things… click things",
    "Clickception!",
    "Are we having fun yet?",
    "You’re unstoppable",
    "Click me like you mean it",
    "I knew this would happen",
    "Okay, that’s enough… just kidding",
    "My button heart is full",
    "You must be bored",
    "Clickity-clack, clickity-clack!"
];


function change() {

  const random = Math.floor(Math.random() * messages.length);
  button.textContent = messages[random];

}

 const crazyButton = document.getElementById("crazyButton");

crazyButton.addEventListener("click", function(){

  if(crazyButton.textContent === "Click Me"){
    crazyButton.textContent = "Click Him <--";
  }
  else if(crazyButton.textContent === "Click Him <--"){
    crazyButton.textContent = "Click Him -->";
  }
  else{
    crazyButton.textContent = "Click Me";
  }

})

const sillyButton = document.getElementById("sillyButton");

sillyButton.addEventListener("mouseover", function(){
  sillyButton.textContent = "Gotta be quicker than that!";
})

