// --- 1. Filtering an Array of Numbers ---
console.log("--- Filtering Numbers ---");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// The callback function returns true only if the number is even.
const evenNumbers = numbers.filter(number => {
  return number % 2 === 0;
});

console.log("Original array:", numbers);
console.log("Filtered for even numbers:", evenNumbers); // -> [2, 4, 6, 8, 10]


// --- 2. Filtering an Array of Objects ---
console.log("\n--- Filtering Objects ---");
const users = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true },
  { name: "David", isActive: false }
];

// The callback returns true only if the user's 'isActive' property is true.
const activeUsers = users.filter(user => user.isActive);

console.log("Original users array:", users);
console.log("Filtered for active users:");
console.table(activeUsers); // .table() is great for this!


// --- 3. Chaining 'filter' and 'map' ---
console.log("\n--- Chaining Methods ---");
const products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
    { name: "Keyboard", price: 75, inStock: true },
    { name: "Monitor", price: 300, inStock: true }
];

// First, filter for products that are in stock.
// Then, from that new array, map to get just their names.
const inStockProductNames = products
  .filter(product => product.inStock)
  .map(product => product.name);
  
console.log("Names of products in stock:", inStockProductNames); // -> ["Laptop", "Keyboard", "Monitor"]