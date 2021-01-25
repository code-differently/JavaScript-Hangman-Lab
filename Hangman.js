let dArray = [];
let failCount = 0;
let targetWord = "";

const readline = require("readline");

// This array contains pictures of Hangman, that are used with Index.
const hangmanPics = [
  ` 
    +---+
    |   |
        |
        |
        |
        |
  =========`,

  ` 
    +---+
    |   |
    O   |
        |
        |
        |
  =========`,

  ` 
    +---+
    |   |
    O   |
    |   |
        |
        |
  =========`,

  ` 
    +---+
    |   |
    O   |
   /|   |
        |
        |
  =========`,

  ` 
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
  =========`,

  ` 
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
  =========`,

  ` 
    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
  =========`,
];

class Hangman {
  failCount = 0;

  // Constructor to save the guess word.

  constructor(target) {
    targetWord = target;

    this.init();
  }

  // Main init function to start the game.

  init() {
    // dArray - An array empty array of guess word length to store user guesses.

    dArray = Array(targetWord.length);
    failCount = 0;

    // parameters(undef = false, count=false, newGame=true)

    console.log(this.getDisplayMessage(false, false, true));
  }

  // Function responsible for checking the entered letter to see if guess word contains the letter.

  guessLetter(letter) {
    let tick;
    for (let i = 0; i < targetWord.length; i++) {
      // Converting to lowercase so we don't have any casing errors

      if (targetWord[i].toLowerCase() === letter) {
        dArray[i] = targetWord[i];
        tick = true;
      } else if (dArray[i] === undefined) {
        // console.log("undef");

        // parameters(undef = true, count=false, newGame=false)

        dArray[i] = this.getDisplayMessage(true);
      }
    }

    tick ? (tick = false) : failCount++;

    if (failCount === 6) {
      // We're console logging the hangmanPics Array with index of failCount.

      console.log(hangmanPics[failCount]);
      return;
    } else {
      // We're console logging the hangmanPics Array with index of failCount.

      console.log(hangmanPics[failCount]);
    }

    // parameters(undef = false, count=true, newGame=false)
    console.log(this.getDisplayMessage(false, true));
  }
  targetWord() {
    return targetWord;
  }
  isMessageSolved() {
    if (dArray.includes("*")) {
      return false;
    } else {
      return true;
    }
  }

  getRemainingGuesses() {
    return Number(6 - failCount);
  }

  // Method with default parameters that can be overrided when called.
  getDisplayMessage(undef = false, count = false, newGame = false) {
    if (undef) return "*";
    else if (count) return dArray.join("");
    else if (newGame) return dArray.join("*") + "*";
    else return "";
  }
}

module.exports = Hangman;
