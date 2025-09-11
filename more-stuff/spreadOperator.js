// --- Spreading Arrays ---
console.log("--- Spreading Arrays ---");
const fruits = ["Apple", "Banana"];
const vegetables = ["Broccoli", "Carrot"];

// Combine two arrays
const produce = [...fruits, ...vegetables];
console.log("Combined produce:", produce);

// Create a new array with a new element (immutable pattern)
const updatedFruits = [...fruits, "Cherry"];
console.log("Updated fruits:", updatedFruits);
console.log("Original fruits is unchanged:", fruits);


// --- Spreading Objects ---
console.log("\n--- Spreading Objects ---");
const user = {
  name: "Alice",
  level: 10
};

const userDetails = {
  level: 11, // This will overwrite the level from 'user'
  country: "Canada"
};

// Combine two objects
const mergedUser = { ...user, ...userDetails };
console.log("Merged user:", mergedUser); // -> { name: 'Alice', level: 11, country: 'Canada' }


// --- Spreading in Function Calls ---
console.log("\n--- Spreading in Function Calls ---");
const numbers = [5, 10, 3];

// The Math.max function expects separate arguments (e.g., max(5, 10, 3))
// The spread operator provides them.
const maxNumber = Math.max(...numbers);

console.log(`The max number in [${numbers}] is: ${maxNumber}`); // -> 10