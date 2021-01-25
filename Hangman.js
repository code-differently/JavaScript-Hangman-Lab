
class Hangman {
     
    constructor(phrase) {
          this.phrase =  phrase;
          this.guesses = 6;
          this.message = [];
          this.lettersGuess = [];
         // create another variable using the this keyword for the current number of guesees, should be starting with 6 guesses.
     }
    getDisplayMessage(){
        //return the current guess (i.e.___e ***e*)
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
          if (count == 0 ) {
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

/* updated code 
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
        return displayMessage;
    }
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