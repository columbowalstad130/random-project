function addDigits(num) {
  if (num < 10) return num;
  else return (Math.floor((parseInt(num / 10) + parseInt(num % 10)) / 10) - Math.sign(num));
}

console.log(addDigits(37)); // Output: 6
