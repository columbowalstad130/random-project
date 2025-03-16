
const generateRandomCode = () => {
  let code = "";
  for (let i = 0; i < 5; i++) {
    const num = Math.floor(Math.random() * 10);
    code += String.fromCharCode("a".charCodeAt(0) + num);
  }
  return code;
};

console.log(generateRandomCode());