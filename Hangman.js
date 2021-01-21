
class Hangman {
    constructor (word) {
        this.word = word;
        this.guesses = 6;
        this.display = "";
        this.createInitialDisplay();
        this.lettersGuessed = [];
    }

    getDisplayMessage(){
        return this.display;
    }

    guessLetter(letter){
        if (this.lettersGuessed.includes(letter)) {
            console.log("Letter was already guessed.");
        } else {
            let inWord = false;
            for (let i=0; i<this.word.length; i++) {
                if (this.word[i].toLowerCase() == letter.toLowerCase()) { // accounts for capitals
                    inWord = true;
                    this.display = this.display.substring(0, i) + this.word[i] + this.display.substring(i+1, this.display.length);
                }
            }
            if (inWord == false) {
                this.guesses--;
                this.lettersGuessed.push(letter);
            } else {
                this.lettersGuessed.push(letter);
            }
        }
    }

    getRemainingGuesses(){
        return this.guesses;
    }

    isMessageSolved(){
        if (this.display.substring(0, this.display.length-1) === this.word) {
            return true;
        }
        return false;
    }
//*Note: Any additional functions you write should be unit tested*
    createInitialDisplay(){
        for (let i=0; i<this.word.length; i++) {
            if (this.word[i] == " ") {
                this.display += " ";
            } else {
                this.display += "_";
            }
        }
        this.display += "\n";
    }

    getWord() {
        return this.word;
    }

}

module.exports = Hangman;