
class Hangman {

    constructor(phrase){
        this.phrase = phrase;
        this.guesses = 6;
        this.message = [];
        this.lettersGuess = [];
    }

    getDisplayMessage(){
        return this.phrase;
    }

    guessLetter(letter){  
        var count = 0;
        for (var i = 0; i < this.phrase.length; i++) {
                if(letter.toLowerCase() == this.phrase[i].toLowerCase()) {
                    count ++;
                } 
            }
            if (count == 0){
                this.guesses --;
            }
    }

    getRemainingGuesses(){
        
        return this.guesses;
    }

    isMessageSolved(){
        return false;
    }

}

module.exports = Hangman;