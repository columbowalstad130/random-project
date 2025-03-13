function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomNumber(0, 10);
console.log(`The random number is: ${randomNumber}`);
