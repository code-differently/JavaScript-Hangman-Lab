
class Hangman {
    constructor(phrase) {
        this.phrase = phrase;
    }// end constructor
    getDisplayMessage() {
        this.phrase = this.phrase.split('');
        let message = [];
        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z','A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        for (let i = 0; i < this.phrase.length; i++) {
            for (let j = 0; j < alphabet.length; j++){
             if (this.phrase[i] === alphabet[j]) {
                 message[i] = '*';
                 j = alphabet.length;
             } else {
                 message[i] = ' ';
             }
          }//end j loop 
        }//end i loop
        return message.join('');
    } //end getDisplayMessage

    guessLetter(letter) {
        
    }//end guessLetter

    getRemainingGuesses(){
        return -1;
    }//end getRemainingGuesses

    isMessageSolved(){
        return false;
    }//end isMessageSolved

}//end class

module.exports = Hangman;

