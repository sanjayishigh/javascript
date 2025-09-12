// --- Basic Usage of forEach ---
console.log("--- Basic Usage ---");
const fruits = ["Apple", "Banana", "Cherry"];

// For each 'fruit' in the 'fruits' array, execute the arrow function.
fruits.forEach(fruit => {
  console.log(`Processing fruit: ${fruit}`);
});


// --- Using the Index Parameter ---
console.log("\n--- Using the Index ---");
const colors = ["Red", "Green", "Blue"];

// The callback can also receive the index of the element.
colors.forEach((color, index) => {
  console.log(`Color at index ${index} is ${color}`);
});


// --- Comparison with a for...of loop ---
console.log("\n--- Comparison with for...of ---");
// The forEach loop above is a cleaner way of writing this:
for (const color of colors) {
    console.log(`Processing color: ${color}`);
}