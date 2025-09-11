// --- Syntax Comparison ---
console.log("--- Syntax Comparison ---");

// Traditional function expression
const traditionalAdd = function(a, b) {
  return a + b;
};

// Arrow function (equivalent to above)
const arrowAdd = (a, b) => {
  return a + b;
};

console.log("Traditional:", traditionalAdd(5, 5));
console.log("Arrow:", arrowAdd(5, 5));


// --- Implicit Return ---
console.log("\n--- Implicit Return ---");

// Because the function body is a single expression, we can omit {} and 'return'.
const multiply = (a, b) => a * b;

console.log("Result of multiply(4, 5):", multiply(4, 5));


// --- Single Parameter (Parentheses are optional) ---
console.log("\n--- Single Parameter ---");

const square = n => n * n;

console.log("Result of square(7):", square(7));


// --- Common Use Case: Array Methods ---
console.log("\n--- Use Case: Array Methods ---");
const numbers = [1, 2, 3, 4];

// Arrow functions make array methods very clean and readable.
const doubledNumbers = numbers.map(n => n * 2);

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);