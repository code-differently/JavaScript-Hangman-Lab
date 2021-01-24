// TODO
// update game display
// allow for consecutive plays

const readline = require('readline');
const Hangman = require('./Hangman');
const prompt = require('prompt-sync')();

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
playGame();

function playGame() {
    const word = prompt('Please enter word to guess: ');
    const hangman = new Hangman(word); 
        
    console.log(`Remaining Guesses: ${hangman.getRemainingGuesses()}`);
    console.log(hangman.getDisplayMessage());
    console.log("Next Guess:");

    process.stdin.on('keypress', (str, key) => {
        // console.log("hangman at process.stdin", hangman); //at this point, inappropriate instance of the hangman object when trying to allow for second round of play
        if (key.sequence === '\u0003') {
            process.exit();
        }
        else {
            hangman.guessLetter(str);
            console.log(`${str}\n`);
            
            if (hangman.isMessageSolved()) {
                console.log(`You won! The hidden message was ${hangman.word}`); //second time around, display message and word are accurate but you won is logged after first guess
                const playAgain = prompt('Do you want to play again? y/n ');
                // Method 1
                if (playAgain.toLowerCase() == 'y' || playAgain.toLowerCase() == 'yes') {
                    playGame();
                } else if (playAgain.toLowerCase() == 'n' || playAgain.toLowerCase() == 'no') {
                    process.exit();
                }
                // Method 2
                // process.stdin.on('keypress', (key) => {
                    // if (key == 'y') { //y = 79 or 89?
                    //     playGame();
                    // }
                    // else {
                    //     process.exit();
                    // }
                // });
            }

            else if (hangman.getRemainingGuesses() > 0) {
                console.log(`Remaining Guesses: ${hangman.getRemainingGuesses()}`);
                hangman.printGuessedLetters();
                console.log(hangman.getDisplayMessage());
                console.log("Next Guess:");
            }

            else {
                console.log(`Game Over! The hidden message was ${hangman.word}`); //same issue
                // Method 1
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