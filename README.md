# JavaScript Hangman Lab
Test line 
![hangman](https://media.giphy.com/media/ybQIv0CsYm1XY9A8Dm/giphy.gif)

## Description
You will create a CLI Hangman game. In this game, a user tries to guess a hidden phrase one letter at a time. If they guess a letter that is not in the phrase, they lose a guess. If the user uncovers the phrase before they run out of guesses, they win!

## Setup

In the root directory, run the following to:

Install all the required packages
```bash
npm install
```

Run the test cases
```bash
npm test
```

Run the game
```bash
npm start 
```

To change the hidden message, modify the value passed into the constructor in `Game.js`
```javascript
const readline = require('readline');
const Hangman = require('./Hangman');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let hangman = new Hangman("Code Differently");
```

## Requirements

*Note: Any additional functions you write should be unit tested*

* The user starts with 6 remaining guesses
* The user guesses one letter at a time
* If the user guesses a letter in the hidden message, all occurances of that letter are revealed
* If the user guesses a letter not in the hidden message, they lose a remaining guess
* If a user loses all their remaining guesses, they lose
* If a user reveals all of the letters in the hidden message, they win!

![win](https://media.giphy.com/media/o75ajIFH0QnQC3nCeD/giphy.gif)

## Optional
* Modify `Game.js` to allow the user to enter the hidden message in the terminal before the game rather than hardcoding it in the `Game.js` file.
* Prevent the user from reguessing a letter
* Improve the console output

![ui](optionalUI.jpg)


## Submission
Push your code to GitHub and create a pull request


