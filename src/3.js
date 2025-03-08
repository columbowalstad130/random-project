import { random } from 'https://cdn.skypack.dev/@types/node';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const generateRandomNumber = () => {
  const min = 1;
  const max = 10;
  return getRandomInt(max - min + 1) + min;
}

generateRandomNumber();