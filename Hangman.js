
class Hangman {
    constructor (word){
        
       this.word = word;
       this.counter = 6;
       this.guessedLetter = [];
    }
    getDisplayMessage(){

            const wordSeperatedBySpace = this.word.split(" ");
            return this.getRemainingGuesses() ?  wordSeperatedBySpace
                .map((wordInPhrase) => {
                    return wordInPhrase
                    .split("")
                    .map((letter) => { return this.guessedLetter.includes(letter.toLowerCase()) ? letter : "*";})
                    .join("");
                })
                .join(" ") : this.word;
          
    }

    guessLetter(letter){
        if(this.word.split('').map(i => i.toLowerCase()).includes(letter.toLowerCase())){
            this.guessedLetter.push(letter);

        }
        else {
            this.counter --;    
        }
    }
    getRemainingGuesses(){
        return this.counter;
    }

    isMessageSolved(){
        const currentMessage = this.getDisplayMessage().split('');
        return currentMessage.every(letter => {return letter == "*" ? false:true});
        
    }

}

module.exports = Hangman;