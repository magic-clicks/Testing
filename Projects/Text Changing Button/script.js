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
];


function change() {

  const random = Math.floor(Math.random() * messages.length);
  button.textContent = messages[random];

}

console.log(messages);

