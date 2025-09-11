// 1. Create an array of strings
const fruits = ["Apple", "Banana", "Cherry"];
console.log("Initial array:", fruits);

// 2. Access elements by index (zero-based)
console.log("First fruit (index 0):", fruits[0]); // -> "Apple"
console.log("Number of fruits:", fruits.length);   // -> 3

// 3. Add an element to the end with push()
fruits.push("Date");
console.log("After push('Date'):", fruits); // -> ["Apple", "Banana", "Cherry", "Date"]

// 4. Remove the last element with pop()
const removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit);      // -> "Date"
console.log("After pop():", fruits);         // -> ["Apple", "Banana", "Cherry"]

// 5. Loop through the array
console.log("Looping through the fruits:");
for (const fruit of fruits) {
  console.log(`- ${fruit}`);
}