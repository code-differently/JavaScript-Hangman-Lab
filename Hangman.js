
class Hangman {
    constructor(phrase){
        this.phrase = phrase;
        this.guesses = 6;
        this.letterGuess = [];
    }

    getDisplayMessage(){
    const splitWords = this.phrase.split(" ");
    return this.getRemainingGuesses() ?  splitWords
        .map((wordInPhrase) => {
            return wordInPhrase
            .split("")
            .map((letter) => { return this.letterGuess.includes(letter.toLowerCase()) ? letter : "*";})
            .join("");
        })
        .join(" ") : this.phrase;
      
}

guessLetter(letter){  
        var count = 0;
        this.letter = letter;
        for (var i = 0; i < this.phrase.length; i++) {
                if(letter.toLowerCase() == this.phrase[i].toLowerCase()) {
                    count ++;
                    this.letterGuess += letter;
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
        const currentMessage = this.getDisplayMessage().split('');
        return currentMessage.every(letter => {return letter == "*" ? false:true});
    }

}

module.exports = Hangman;

