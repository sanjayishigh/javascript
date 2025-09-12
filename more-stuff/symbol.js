// --- 1. Symbols are Always Unique ---
console.log("--- Uniqueness ---");

const id1 = Symbol("id");
const id2 = Symbol("id"); // Has the same description, but is a different symbol

console.log("id1 === id2:", id1 === id2); // -> false (This is the key feature!)


// --- 2. Use Case: Unique Object Keys ---
console.log("\n--- Unique Object Keys ---");

const user = {
  name: "Alice",
  email: "alice@example.com"
};

const SECRET_ID = Symbol("A unique identifier for the user");

// Add a property to the user object using the symbol as the key.
// This key will never clash with any other property like user.id or user["id"].
user[SECRET_ID] = 12345;

console.log("User object:", user);
console.log("Accessing the secret ID:", user[SECRET_ID]); // -> 12345


// --- 3. Symbols are "Hidden" from Iteration and JSON ---
console.log("\n--- Symbols are Hidden ---");

// JSON.stringify ignores symbol properties
const jsonString = JSON.stringify(user);
console.log("JSON string:", jsonString); // -> {"name":"Alice","email":"alice@example.com"}

// A for...in loop also ignores symbol properties
console.log("Looping with for...in:");
for (const key in user) {
  console.log(`- ${key}: ${user[key]}`); // SECRET_ID is not logged
}