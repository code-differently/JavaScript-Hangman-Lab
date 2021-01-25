
class Hangman {

    constructor(phrase) {
        this.phrase = phrase;
        this.guesses = 6;
        this.message = [];
        this.lettersGuess = [];
    }

    getDisplayMessage(){
        const regex = /\S/g;
        let displayMessage = this.phrase.replace(regex, '*');
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase.includes(this.lettersGuess)) {
                displayMessage[i] = this.lettersGuess[this.lettersGuess.length -1];
            }
        }
        return displayMessage;
    }

    guessLetter(letter){
        var count = 0;
        for (var i = 0; i < this.phrase.length; i++) {
                if (letter.toLowerCase() == this.phrase[i].toLowerCase()) {
                    count ++;
                    this.lettersGuess += letter;
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

// guessLetter(letter){
//     var count = 0;
    
//     const regex = /\s|^letter/i;

//     for (var i = 0 ; i < this.phrase.length ; i++ ) {
//         if (letter.toLowerCase() == this.phrase[i].toLowerCase()) {
//             count++
//         } 
//     }
//         if (count == 0) {
//             this.guesses--;
//         } else {
//             for (let i = 0 ; i < this.phrase ; i++) {
//                 let displayMessage = this.phrase.replace(regex, '*');

//             }   

//         }
// }
