const readline = require('readline');
const Hangman = require('./Hangman');
const prompt = require('prompt-sync')();

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

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
            process.exit();
        }

        else if (hangman.getRemainingGuesses() > 0) {
            console.log(`Remaining Guesses: ${hangman.getRemainingGuesses()}`);
            console.log(hangman.getDisplayMessage());
            console.log("Next Guess:");
        }

        else {
            console.log(`Game Over! The hidden message was ${hangman.word}`); //same issue
            process.exit();
        }
    }

})