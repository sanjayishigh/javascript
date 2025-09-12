// --- 1. Basic Transformation: Doubling Numbers ---
console.log("--- Doubling Numbers ---");
const numbers = [1, 2, 3, 4, 5];

// For each 'number', return that number multiplied by 2.
const doubledNumbers = numbers.map(number => {
  return number * 2;
});

console.log("Original array:", numbers); // Original is unchanged
console.log("New doubled array:", doubledNumbers); // -> [2, 4, 6, 8, 10]


// --- 2. Transforming an Array of Objects ---
// A common use case: extracting a specific piece of data.
console.log("\n--- Extracting Names from Objects ---");
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

// For each 'user' object, return just the 'name' property.
const userNames = users.map(user => user.name);

console.log("Original user objects:", users);
console.log("New array of names:", userNames); // -> ["Alice", "Bob", "Charlie"]


// --- 3. Transforming to a New Object Shape ---
console.log("\n--- Transforming to a New Object Shape ---");

// For each 'user', return a new object with a different structure.
const userLabels = users.map(user => {
  return {
    label: `${user.name} (ID: ${user.id})`,
    value: user.id
  };
});

console.log("New array of label/value objects:");
console.table(userLabels); // .table() is great for this!