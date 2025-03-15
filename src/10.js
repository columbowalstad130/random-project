function randomCode() {
  let arr = [1,2,3,4,5];
  const num = Math.floor(Math.random() * arr.length);
  return arr[num];
}
