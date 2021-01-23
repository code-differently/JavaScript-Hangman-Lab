class Hangman {
  getDisplayMessage() {
    //if the game is new display "**** ***********"
    //if correct letter is guessed display 
    //that letter in the correct position in place of *
    //if incorrect letter is displayed do not update display

    return "**** ***********";
  }

  guessLetter(letter) {}

  getRemainingGuesses() {
    return -1;
  }

  isMessageSolved() {
    return false;
  }
}

module.exports = Hangman;
