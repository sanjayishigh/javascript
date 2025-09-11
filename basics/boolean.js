// --- Basic Boolean and if/else ---
console.log("--- Basic Booleans ---");
const isSubscribed = true;

if (isSubscribed) {
  console.log("Access Granted."); // This block will run
} else {
  console.log("Access Denied.");
}


// --- Comparisons produce booleans ---
console.log("\n--- Comparisons ---");
const userAge = 20;
const canVote = userAge >= 18; // This expression becomes 'true'

console.log(`Is the user 20 years old able to vote? ${canVote}`);


// --- Truthy and Falsy Values ---
console.log("\n--- Truthy and Falsy ---");
const username = ""; // This is a falsy value (empty string)
const score = 100;   // This is a truthy value (non-zero number)

if (username) {
  console.log("This will NOT print, because username is falsy.");
}

if (score) {
  console.log("This WILL print, because score is truthy.");
}