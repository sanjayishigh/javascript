// 1. Function Declaration
// This function takes one parameter, 'name', and returns a greeting string.
function greet(name) {
  return `Hello, ${name}!`;
}

// 2. Arrow Function
// This function takes two parameters, 'a' and 'b', and returns their sum.
// For single-line arrow functions, the 'return' is implicit.
const add = (a, b) => a + b;

// 3. Calling the functions and using their return values
const greeting = greet("Alice");
console.log(greeting); // -> "Hello, Alice!"

const sum = add(5, 10);
console.log("The sum is:", sum); // -> The sum is: 15

// 4. A function with a default parameter
const sayHello = (name = "Guest") => `Hi, ${name}!`;

console.log(sayHello("Bob"));   // -> "Hi, Bob!"
console.log(sayHello());      // -> "Hi, Guest!" (uses the default value)