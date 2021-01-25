
class Hangman {

    constructor(phrase) {
        this.phrase = phrase;
        this.guesses = 6;
        this.message = [];
        this.lettersGuess = [];
    }

    getDisplayMessage(){
        const regex = /\s/g;
        let displayMessage = this.phrase.replace(regex, '*');
        return displayMessage;
    }

    guessLetter(letter){
        var count = 0;
        for (var i = 0; i < this.phrase.length; i++) {
            if (letter.toLowerCase() == this.phrase[i].toLowerCase()) {
                count ++;
                this.lettersGuess += letter;
                console.log(this.lettersGuess);
            }
    }
    if (count == 0){
        this.lettersGuess--;
    }

    getRemainingGuesses(){
        return -1;
    }

    isMessageSolved(){
        return false;
    }

}

module.exports = Hangman;