// --- 1. Using `for...in` with an Object (Correct Use Case) ---
console.log("--- Looping over an Object ---");
const user = {
  name: "Alice",
  level: 10,
  isAdmin: true
};

// 'key' will be "name", then "level", then "isAdmin" on each loop.
for (const key in user) {
  // To get the value, we use the key with bracket notation.
  const value = user[key];
  console.log(`Key: ${key}, Value: ${value}`);
}


// --- 2. Why NOT to use `for...in` with an Array ---
console.log("\n--- Incorrect Use: Looping over an Array ---");
const fruits = ["Apple", "Banana", "Cherry"];

console.log("Using `for...in` (Bad Practice):");
for (const index in fruits) {
  // 'index' here is a STRING: "0", "1", "2"
  console.log(`Index: ${index}, Type: ${typeof index}`);
}

console.log("\nUsing `for...of` (The Correct Way for Arrays):");
for (const fruit of fruits) {
  // 'fruit' is the actual value: "Apple", "Banana", "Cherry"
  console.log(`Value: ${fruit}`);
}