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
    const lowerCasePhraseAsArray = this.phrase
      .split("")
      .map((l) => l.toLowerCase());
    let displayMessage = "";
    for (let i = 0; i < lowerCasePhraseAsArray.length; i++) {
      if (this.lettersGuess.includes(lowerCasePhraseAsArray[i])) {
        displayMessage += this.phrase[i];
      } else if (lowerCasePhraseAsArray[i] == " ") {
        displayMessage += " ";
      } else {
        displayMessage += "*";
      }
    }
    return displayMessage;
  }

  guessLetter(letter) {
    const lowerCaseLetter = letter.toLowerCase();
    const lowerCasePhraseAsArray = this.phrase
      .split("")
      .map((l) => l.toLowerCase());
    if (lowerCasePhraseAsArray.includes(lowerCaseLetter)) {
      this.lettersGuess.push(lowerCaseLetter);
    } else {
      this.guesses--;
    }
  }

  getRemainingGuesses() {
    return this.guesses;
  }

  isMessageSolved() {
    return this.getDisplayMessage()
      .split("")
      .every((char) => char !== "*");
  }

  getPhrase() {
    return this.phrase;
  }
}

module.exports = Hangman;
