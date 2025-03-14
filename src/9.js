function getRandomCode() {
  const codes = ["0123456789", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  let code = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * codes.length);
    code += codes[randomIndex].charAt(Math.floor(Math.random() * codes[randomIndex].length));
  }
  return code;
}
