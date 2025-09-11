// 1. Creating strings
const singleQuote = 'Hello';
const doubleQuote = "World";

// 2. Concatenation (the old way)
const combinedOld = singleQuote + " " + doubleQuote;
console.log("Combined (old way):", combinedOld);

// 3. Template Literals (the modern, better way)
const name = "Alice";
const points = 100;
const combinedNew = `${singleQuote} ${doubleQuote}, from ${name}! You have ${points} points.`;
console.log("Combined (new way):", combinedNew);

// 4. Accessing characters and length
const language = "JavaScript";
console.log("\nThe string is:", language);
console.log("Number of characters (length):", language.length); // -> 10
console.log("Character at index 0:", language[0]);           // -> "J"
console.log("Character at index 4:", language[4]);           // -> "S"

// 5. Demonstrating Immutability
console.log("\n--- Immutability Demo ---");
let myString = "hello";
myString.toUpperCase(); // This does NOT change myString

console.log("Original string after toUpperCase():", myString); // -> "hello" (unchanged)

// To get the new value, you must store it
let newUpperString = myString.toUpperCase();
console.log("The new, uppercase string is:", newUpperString); // -> "HELLO"