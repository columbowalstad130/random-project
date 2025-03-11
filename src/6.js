function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateName() {
  const firstNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const lastNames = ["Smith", "Johnson", "Brown", "Patel", "Jones"];
  return `${firstNames[getRandomInt(5)]} ${lastNames[getRandomInt(5)]}`;
}
