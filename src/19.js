// 562e8f074a90c15d7436b1a9d00c9f1e.js

// Define your variables here
let name = "Hello World";
let age = 25;
let isStudent = true;

// Use your variables here
document.getElementById("demo").innerHTML = `The current date and time: ${new Date().toLocaleString()}`;
console.log(`Your name is ${name}, you are ${age} years old, and you are a ${isStudent ? "student" : "not student"} student.`);
