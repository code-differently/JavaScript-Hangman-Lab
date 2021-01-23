
class Hangman {
    constructor (word){
       this.word = word;
       this.counter = 6;
       this.guessedLetter = [];
    }
    getDisplayMessage(){
        
        return this.word.split('').map(i => i == " " ? " ":"*").join('');
        
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

        return false;
    }

}

module.exports = Hangman;