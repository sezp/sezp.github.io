            // Question One: What is your name?
            var answerOne = prompt("What is your name?");
            var answerTwo = " ";
            if (answerOne == null) {
                answerTwo = false;
            } else { 
                answerTwo = true;
            }

            // Question Two: Do they want to play?
            questionThree = "";
            if (answerTwo == true) { 
                questionThree = prompt(`Hello ${answerOne}! Do you want to play a game?`);
            } else {
                void(0);
            }

            // If yes, give them Question Three, if not - boo!
            if (questionThree == "yes" || questionThree == "Yes" || questionThree == "Yes!") {
                answerThree = prompt("Do you like Taylor Swift?");
            } else {
                questionThree = "end";
                alert("Boooooooooooo");
            }

            // Result
            if (answerThree == "yes" || answerThree == "Yes" || answerThree == "Yes!") {
                alert(`Well done ${answerOne} you won the game!`);
            } else if (questionThree == "end") {
             void(0); 
            } else {
                alert(`Sorry ${answerOne} - Game over.`);
            }
