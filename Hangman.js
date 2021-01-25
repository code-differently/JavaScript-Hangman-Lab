
class Hangman {

    constructor(phrase){
        this.phrase = phrase;
        this.guesses = 6;
        this.message = [];
        this.lettersGuess = [];
        this.letter = [];
    }

    getDisplayMessage(){
        const regex = /\S/g;
        let displayMessage = this.phrase.replace(regex, '*');
        let position = this.phrase.search(this.letter);
            console.log(position);

        return displayMessage;
    }

    guessLetter(letter){  
        var count = 0;
        this.letter = letter;
        for (var i = 0; i < this.phrase.length; i++) {
                if(letter.toLowerCase() == this.phrase[i].toLowerCase()) {
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
