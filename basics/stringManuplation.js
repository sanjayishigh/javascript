// --- The Original String ---
const message = "   Hello JavaScript World!   ";
console.log("Original: '" + message + "'");


// --- Changing Case and Trimming Whitespace ---
console.log("\n--- Case & Trim ---");
const trimmed = message.trim();
console.log("Trimmed: '" + trimmed + "'"); // -> "Hello JavaScript World!"

const upper = trimmed.toUpperCase();
console.log("Uppercase: '" + upper + "'"); // -> "HELLO JAVASCRIPT WORLD!"


// --- Slicing and Replacing ---
console.log("\n--- Slice & Replace ---");
// Extract the word "JavaScript" (starts at index 6, ends before 16)
const sliced = trimmed.slice(6, 16);
console.log("Sliced (6, 16): '" + sliced + "'"); // -> "JavaScript"

// Replace "World" with "Universe"
const replaced = trimmed.replace("World", "Universe");
console.log("Replaced: '" + replaced + "'"); // -> "Hello JavaScript Universe!"


// --- Splitting into an Array ---
console.log("\n--- Splitting ---");
const words = trimmed.split(" "); // Split the string by the space character
console.log("Split into an array of words:", words); // -> ["Hello", "JavaScript", "World!"]


// --- Chaining Methods ---
console.log("\n--- Method Chaining ---");
// Trim the original message, make it lowercase, and replace a word all in one line.
const chainedResult = message.trim().toLowerCase().replace("world", "friends");
console.log("Chained result: '" + chainedResult + "'"); // -> "hello javascript friends!"