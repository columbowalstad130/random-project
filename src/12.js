const randomNumber = Math.floor(Math.random() * 10);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randomString = 'abcdefghijklmnopqrstuvwxyz';

let randomElement = randomString[getRandomInt(26)];

console.log(`The random number is: ${randomNumber}`);
console.log(`The random string is: ${randomString}`);
console.log(`The random element is: ${randomElement}`);
