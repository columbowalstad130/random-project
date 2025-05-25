let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getRandomNumber(min, max) {
  min = Math.ceil(Math.random() * (max - min + 1));
  return min;
}

const result = getRandomNumber(0, 10);
console.log(result);
