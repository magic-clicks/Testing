// Number guessing game

//let me try and tie it to a game so it's not forcing to run everytime you open the page

const guessingGame = document.getElementById("guessingGame");

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;

let attempts = 0;
let guess;
let running = true;

guessingGame.onclick = function(){

    while(running == true){

        guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
        guess = Number(guess);
        
        if(isNaN(guess)){
            window.alert("Please enter a valid number");
        }
        else if(guess < minNum || guess > maxNum){
            window.alert("Please enter a valid number");
        }
        else{
            attempts++
            if(guess < answer){
                window.alert("Too low! Try again!");

            }
            else if(guess > answer){
                window.alert("Too high! Try again!");

            }
            else{
                window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`);
                running = false;
            }
        }
    }
}
