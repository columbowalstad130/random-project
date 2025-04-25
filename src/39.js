function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomNumber(min, max) {
  return min + getRandomInt(max - min);
}
