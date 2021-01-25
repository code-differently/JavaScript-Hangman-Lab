
class Hangman {
    constructor(phrase) {
        this.originalPhrase = phrase;
        this.guess = 'Code Differently';
        // create another variable using the this keyword for the current number of guesses, starting with 6 guesses
    }

    getDisplayMessage(){
        // return the current guess (i.e. ***e *****e**)
        return this.guess;
    }

    guessLetter(letter){
        // does that letter exist in the original phrase? 
            // if it does, add letter to guess
            // if it does not, substract one from the number of guesses
    }

    getRemainingGuesses(){
        // returning the current number of guesses
        return -1;
    }

    isMessageSolved(){
        // return whether or not the user has guessed all the letters in the phrase
        return false;
    }

}


// class Student {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const dominique = new Student('dominique');
// const shannon = new Student("Shannon");

// console.log(dominique.name) // dominique
// console.log(shannon.name) // shannon



module.exports = Hangman;

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
