// Get a random number between 1 and 10
let num = Math.floor(Math.random() * 10) + 1;

// Use the random number to generate a random word
let words = ["apple", "banana", "orange", "grape", "peach", "pineapple"];
let word = words[num - 1];

console.log(word);
