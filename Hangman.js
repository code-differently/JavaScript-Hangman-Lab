class Hangman {
  //Constructor
  constructor(phrase) {
    this.phrase = phrase;
    this.guesses = 6;
    this.message = [];
    this.lettersGuess = [];
    this.letter = [];
  }

  getDisplayMessage() {
    let displayMessage = this.phrase.replace(/\S/g, "*");
    let position = this.phrase.search(this.letter);
    console.log(position);

    return displayMessage;
  }

  guessLetter(letter) {
    let countLetter = 0;
    this.letter = letter;
    for (let i = 0; i < this.phrase.length; i++) {
      if (letter.toLowerCase() == this.phrase[i].toLowerCase()) {
        this.lettersGuess += letter;
        countLetter++;
      }
    }
    if (countLetter == 0) {
      this.guesses--;
    }
  }

  getRemainingGuesses() {
    return this.guesses;
  }

  isMessageSolved() {
    return false;
  }
}

module.exports = Hangman;
