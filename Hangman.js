
class Hangman {
    constructor (word) {
        this.word = word;
        this.guesses = 6;
        this.display = [];
        this.createInitialDisplay();
        this.lettersGuessed = [];
    }

    getDisplayMessage(){
        let display = "";
        for (let i=0; i<this.display.length; i++) {
            display += `${this.display[i]} `;
        }
        return display;
    }

    guessLetter(letter){
        if (this.lettersGuessed.includes(letter)) {
            console.log(`'${letter}' was already guessed.`);
        } else {
            let inWord = false;
            for (let i=0; i<this.word.length; i++) {
                if (this.word[i].toLowerCase() == letter.toLowerCase()) { // accounts for capitals
                    inWord = true;
                    this.display[i] = this.word[i];
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
        let display = "";
        for (let i=0; i<this.display.length; i++) {
            display += this.display[i];
        }
        if (display === this.word) {
            return true;
        }
        return false;
    }

    createInitialDisplay(){
        for (let i=0; i<this.word.length; i++) {
            if (this.word[i] == " ") {
                this.display.push(" ");
            } else {
                this.display.push("_");
            }
        }
    }
    
    printGuessedLetters(){
        let letters = "";
        for (let i=0; i<this.lettersGuessed.length; i++) {
            letters += this.lettersGuessed[i] + " ";
        }
        console.log(`Guessed Letters: ${letters}`);
    }

    printHangman(){ //this function will print out the hangman depending on the number of incorrect guesses
        // statements ARE dependent on max guesses allotted being 6 but if you allow more guesses, you'll likely want a more elaborate hangman figure
        if (this.guesses == 6) {
            console.log("  ________");
            console.log(" |        |");
            console.log(" |         ");
            console.log(" |         ");
            console.log(" |         ");
            console.log(" |         ");
            console.log("_|_");
        } else if (this.guesses == 5) {
            console.log("  ________");
            console.log(" |        |");
            console.log(" |        O");
            console.log(" |         ");
            console.log(" |         ");
            console.log(" |         ");
            console.log("_|_");
        } else if (this.guesses == 4) {
            console.log("  ________");
            console.log(" |        |");
            console.log(" |        O");
            console.log(" |        |");
            console.log(" |        |");
            console.log(" |         ");
            console.log("_|_");
        } else if (this.guesses == 3) {
            console.log("  ________");
            console.log(" |        |");
            console.log(" |        O");
            console.log(" |        |/");
            console.log(" |        |");
            console.log(" |         ");
            console.log("_|_");
        } else if (this.guesses == 2) {
            console.log("  ________");
            console.log(" |        |");
            console.log(" |        O");
            console.log(" |       \\|/");
            console.log(" |        |");
            console.log(" |         ");
            console.log("_|_");
        }  else if (this.guesses == 1) {
            console.log("  ________");
            console.log(" |        |");
            console.log(" |        O");
            console.log(" |       \\|/");
            console.log(" |        |");
            console.log(" |         \\");
            console.log("_|_");
        }   else if (this.guesses == 0) {
            console.log("  ________");
            console.log(" |        |");
            console.log(" |        O");
            console.log(" |       \\|/");
            console.log(" |        |");
            console.log(" |       / \\");
            console.log("_|_");
        }
    }

}

module.exports = Hangman;