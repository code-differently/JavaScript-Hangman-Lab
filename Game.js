
const readline = require('readline');
const Hangman = require('./Hangman');
const prompt = require('prompt-sync')();

let hangman;

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
playGame();

function playGame() {
    const word = prompt('Please enter word to guess: ');
    hangman = new Hangman(word); 
        
    console.log(`Remaining Guesses: ${hangman.getRemainingGuesses()}`);
    console.log(hangman.getDisplayMessage());
    console.log("Next Guess:");

    process.stdin.on('keypress', (str, key) => { //fix playGame logic to stop it from creating new processes
        // function playGame here means that you have to press something for the prompt to come up, then are asked again  
        //calling playGame here means everytime you guess a letter, it's like you've never guessed another letter
        //putting function inside of process requires you to put word and hangman declaration outside of the process but creates same issue of second round terminating immediately after first guess with old termination message
        // const word = prompt('Please enter word to guess: ');
        // hangman = new Hangman(word); 
        
        if (key.sequence === '\u0003') {
            process.exit();
        }
        else {
            hangman.guessLetter(str); //in the second round, guessing letters twice so the console log will show fresh guess as new guess even if letter was not in previous word
            console.log(`${str}\n`);

            if (hangman.isMessageSolved()) {
                console.log(`You won! The hidden message was ${hangman.word}`); 
                const playAgain = prompt('Do you want to play again? y/n ');
                if (playAgain.toLowerCase() == 'y' || playAgain.toLowerCase() == 'yes') {
                    playGame();
                } else if (playAgain.toLowerCase() == 'n' || playAgain.toLowerCase() == 'no') {
                    process.exit();
                }
            }

            else if (hangman.getRemainingGuesses() > 0) {
                hangman.printHangman();
                hangman.printGuessedLetters();
                console.log(`Remaining Guesses: ${hangman.getRemainingGuesses()}`);
                console.log(hangman.getDisplayMessage());
                console.log("Next Guess:");
            }

            else {
                hangman.printHangman();
                console.log(`Game Over! The hidden message was ${hangman.word}`);
                const playAgain = prompt('Do you want to play again? y/n ');
                if (playAgain.toLowerCase() == 'y' || playAgain.toLowerCase() == 'yes') {
                    playGame();
                } else if (playAgain.toLowerCase() == 'n' || playAgain.toLowerCase() == 'no') {
                    process.exit();
                }

            }
        }

    })
}
