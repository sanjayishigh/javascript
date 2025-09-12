// --- 1. Using .every() ---
console.log("--- .every(): Are all numbers positive? ---");
const numbers1 = [1, 10, 3, 5, 2];
const numbers2 = [1, 10, -3, 5, 2]; // Contains a negative number

// Check if EVERY number is greater than 0
const allPositive1 = numbers1.every(num => num > 0);
const allPositive2 = numbers2.every(num => num > 0);

console.log(`Are all numbers in [${numbers1}] positive?`, allPositive1); // -> true
console.log(`Are all numbers in [${numbers2}] positive?`, allPositive2); // -> false


// --- 2. Using .some() ---
console.log("\n--- .some(): Are there any even numbers? ---");
const numbers3 = [1, 3, 5, 7, 9]; // No even numbers
const numbers4 = [1, 3, 4, 7, 9]; // Contains an even number

// Check if SOME number is divisible by 2
const hasEvenNumber1 = numbers3.some(num => num % 2 === 0);
const hasEvenNumber2 = numbers4.some(num => num % 2 === 0);

console.log(`Does [${numbers3}] have any even numbers?`, hasEvenNumber1); // -> false
console.log(`Does [${numbers4}] have any even numbers?`, hasEvenNumber2); // -> true


// --- 3. Use Case with an Array of Objects ---
console.log("\n--- Use Case: Checking User Statuses ---");
const users = [
  { name: "Alice", isOnline: true },
  { name: "Bob", isOnline: false },
  { name: "Charlie", isOnline: true }
];

const allUsersOnline = users.every(user => user.isOnline);
const someUsersOnline = users.some(user => user.isOnline);

console.log("Are ALL users online?", allUsersOnline); // -> false (because of Bob)
console.log("Are SOME users online?", someUsersOnline); // -> true (because of Alice and Charlie)