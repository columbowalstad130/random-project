const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const getRandomString = () => {
  const possibleChars = "abcdefghijklmnopqrstuvwxyz";
  let randomString = "";
  for (let i = 0; i < 5; i++) {
    randomString += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return randomString;
};
