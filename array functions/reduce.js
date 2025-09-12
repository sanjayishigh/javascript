// --- 1. Basic Use Case: Summing an Array of Numbers ---
console.log("--- Summing Numbers ---");
const numbers = [1, 2, 3, 4, 5];

// The '0' at the end is the initialValue for the accumulator.
const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log("Original array:", numbers);
console.log("Final sum:", sum); // -> 15


// --- 2. Finding the Maximum Value in an Array ---
console.log("\n--- Finding the Max Value ---");
const values = [10, 5, 100, 2, 50];

const maxValue = values.reduce((max, current) => {
  // Return whichever is larger: the current max or the current number.
  return current > max ? current : max;
}, -Infinity); // Start with the lowest possible number

console.log("Original values:", values);
console.log("Max value:", maxValue); // -> 100


// --- 3. Advanced Use Case: Tallying Items into an Object ---
console.log("\n--- Tallying Items into an Object ---");
const fruits = ["Apple", "Banana", "Orange", "Apple", "Banana", "Apple"];

// The initialValue here is an empty object {}.
const fruitTally = fruits.reduce((tally, fruit) => {
  // If the fruit isn't a key in the tally object yet, add it. Otherwise, increment it.
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});

console.log("Original fruits:", fruits);
console.log("Tally object:", fruitTally); // -> { Apple: 3, Banana: 2, Orange: 1 }