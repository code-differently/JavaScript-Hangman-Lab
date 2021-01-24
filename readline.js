// boilerplate method
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });
    
    readline.question('Who are you? ', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
});

// using prompt-sync -- runs before the boiler plate method
// must have prompt-sync installed (npm install prompt-sync)
const prompt = require('prompt-sync')(); //the prompt-sync module is a function that creates prompting functions so you need to call it to access your prompting function
const name = prompt('What is your name?');
console.log(`Hey there ${name}`);
