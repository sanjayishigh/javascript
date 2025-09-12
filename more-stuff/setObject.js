// --- 1. Creating a Set and Removing Duplicates ---
console.log("--- Creating a Set ---");
const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 4, 5];
const uniqueNumbers = new Set(numbersWithDuplicates);

console.log("Original array with duplicates:", numbersWithDuplicates);
console.log("New Set (duplicates are gone):", uniqueNumbers);


// --- 2. Adding and Checking for Values ---
console.log("\n--- Adding and Checking ---");

// Add a new value.
uniqueNumbers.add(6);
console.log("After adding 6:", uniqueNumbers);

// Try to add an existing value. Nothing will happen.
uniqueNumbers.add(2);
console.log("After trying to add 2 again:", uniqueNumbers);

// Check for a value with .has()
console.log("Does the set have 3?", uniqueNumbers.has(3)); // -> true
console.log("Does the set have 99?", uniqueNumbers.has(99)); // -> false


// --- 3. Getting the Size ---
console.log("\n--- Getting the Size ---");
console.log("Number of unique items:", uniqueNumbers.size); // -> 6


// --- 4. Iterating over a Set ---
console.log("\n--- Iterating over the Set ---");
// You can loop over a Set directly.
for (const number of uniqueNumbers) {
  console.log(`- ${number}`);
}