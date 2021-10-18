// Question One: What is your name?
var answerOne = prompt("What is your name?");
console.log(answerOne);

// Question Two: Do they want to play?
var answerTwo = prompt(`Hello ${answerOne}! Do you want to play a game?`);

// If yes, give them Question Three, if not - boo!
var questionThree = " ";
if (answerTwo == "yes" || answerTwo == "Yes") {
    questionThree = prompt("Do you like Taylor Swift?");
} else {
    questionThree = "end";
    alert("Boooooooooooo");
}

// Result
if (questionThree == "yes" || questionThree == "Yes") {
    alert(`Well done ${answerOne} you won the game!`);
} else if (questionThree == "end") {
 void(0); 
} else {
    alert(`Sorry ${answerOne} - Game over.`);
}