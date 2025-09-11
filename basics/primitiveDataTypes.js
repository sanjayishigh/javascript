// --- Declaring Different Primitive Types ---
const greeting = "Hello, World!"; // String
const userAge = 30;              // Number
const isLoggedIn = true;         // Boolean
let selectedItem = null;         // Null
let user;                        // Undefined

// --- Using 'typeof' to check their type ---
console.log("--- Checking Data Types ---");
console.log(`'${greeting}' is a: ${typeof greeting}`);
console.log(`${userAge} is a: ${typeof userAge}`);
console.log(`${isLoggedIn} is a: ${typeof isLoggedIn}`);
console.log(`${selectedItem} is an: ${typeof selectedItem} (Note the bug!)`);
console.log(`${user} is: ${typeof user}`);


// --- Demonstrating Immutability ---
console.log("\n--- Immutability ---");
let originalName = "alex";
let capitalizedName = originalName.toUpperCase(); // This creates a NEW string

console.log("Original:", originalName);        // -> "alex" (unchanged)
console.log("Capitalized:", capitalizedName);  // -> "ALEX" (the new string)


// --- Demonstrating Pass-by-Value ---
console.log("\n--- Pass-by-Value ---");
let originalScore = 100;

function updateScore(scoreCopy) {
  // 'scoreCopy' is a copy of 'originalScore'.
  // Changing it does not affect the original.
  scoreCopy = 150;
  console.log("Score inside function:", scoreCopy); // -> 150
}

updateScore(originalScore);
console.log("Score outside function:", originalScore); // -> 100 (unchanged)