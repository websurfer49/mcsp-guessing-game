
// ### Feature 1: Guess once.
// Using alert and prompt, write a program that asks the user to guess a number and then tells them if they were correct, or if they should have guessed higher or lower.

// *Main Function*

// **Inputs:**

// (Number) Guess

// **Example Output:**

// (String) “Higher”, if Guess is lower than the secret number

// Or

// (String) “Lower”, if Guess is higher than the secret number

// Or

// (String) “Correct!” , if Guess is equal to the secret number

// This is your main function that runs when the page loads
let history = {};

// function printSuccessMessage(){
//   const prevAttempts = history[userName];
// const difference = prevAttempts - numGuesses;
// if(difference < 0){
// alert(`That's Correct ${userName}! You did better in your last game by ${Math.abs(difference)} fewer guesses.`);
// } else if(difference >0){
//   alert(`That's Correct ${userName}! And you beat your previous attempt by ${difference} fewer guesses!`);
// } else{
//   alert(`That's Correct ${userName}! You tied your previous attempt.`);
// }
// }


function play() {
var numberOfGuesses = 1;
  const userName = prompt("What is your name loser?");
let SECRET_NUMBER = 50;
let prevGuesses = [];

  while (true) {
    const guess = prompt("Guess a number");
    numberOfGuesses++;
if(guess === null){
alert("Goodbye!");
break;
}

const numGuess = Number(guess);

    if (Number.isNaN(numGuess)) {
      alert("Please enter a valid number");
    } else if (numGuess < SECRET_NUMBER) {
      numberOfGuesses++;
      alert(`Sorry ${userName}, guess higher`);
    } else if (numGuess > SECRET_NUMBER) {
      numberOfGuesses++;
      alert(`Sorry ${userName}, Guess lower`);
    } else {
      if(!history.hasOwnProperty(userName)){
alert(`Correct! It took you ${numberOfGuesses} guesses.`);
      }else{
  const prevAttempts = history[userName];
  const difference = prevAttempts - numberOfGuesses;
  if(difference <0){
    alert(`That's Correct ${userName}! You did better in your last game by ${Math.abs(difference)} fewer guesses.`);
   } else if(difference >0){
      alert(`That's Correct ${userName}! And you beat your previous attempt by ${difference} fewer guesses!`);
    } else{
        alert(`That's Correct ${userName}! You tied your previous attempt.`);
      }
      }

history[userName] = numberOfGuesses;
const playAgain = prompt("Do you want to play again?");
if(playAgain.toLowerCase() === "yes"){
  play();
}else{
  break;
}
    }
  }
}
play();

