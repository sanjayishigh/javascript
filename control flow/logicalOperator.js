// --- Logical AND (&&) ---
// Both sides must be true for the result to be true.
console.log("--- Logical AND (&&) ---");
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("Allowed to drive."); // This will run
} else {
  console.log("Not allowed to drive.");
}


// --- Logical OR (||) ---
// Only one side needs to be true.
console.log("\n--- Logical OR (||) ---");
const isAdmin = false;
const isEditor = true;

if (isAdmin || isEditor) {
  console.log("Can edit the article."); // This will run
} else {
  console.log("Cannot edit the article.");
}


// --- Logical NOT (!) ---
// Inverts the boolean value.
console.log("\n--- Logical NOT (!) ---");
const isGameOver = false;

if (!isGameOver) {
  console.log("The game is still in progress."); // This will run
}


// --- Short-Circuiting for Default Values ---
console.log("\n--- Short-Circuiting ---");
const usernameInput = ""; // An empty string is a "falsy" value
const displayName = usernameInput || "Guest"; // It uses "Guest" as the default

console.log(`Welcome, ${displayName}!`); // -> "Welcome, Guest!"