// --- 1. Array Destructuring ---
// Unpacking values based on their position.
console.log("--- Array Destructuring ---");
const numbers = [10, 20, 30, 40];

const [first, second] = numbers;
console.log(`First: ${first}, Second: ${second}`); // -> First: 10, Second: 20

// You can skip elements with an empty comma
const [, , third] = numbers;
console.log(`Third element: ${third}`); // -> 30


// --- 2. Object Destructuring ---
// Unpacking values based on their property name.
console.log("\n--- Object Destructuring ---");
const user = {
  id: 42,
  name: "Alice",
  level: 10
};

const { name, level } = user;
console.log(`User: ${name}, Level: ${level}`); // -> User: Alice, Level: 10


// --- 3. Renaming and Default Values ---
console.log("\n--- Renaming and Default Values ---");

// Rename 'name' to 'userName' and provide a default for 'country'.
const { name: userName, country = "Unknown" } = user;

console.log(`New variable 'userName': ${userName}`); // -> Alice
console.log(`Default value for 'country': ${country}`); // -> Unknown


// --- 4. Destructuring in Function Parameters ---
console.log("\n--- Destructuring in Functions ---");

// Instead of passing 'user' and using 'user.name', we destructure immediately.
function displayUser({ name, level }) {
  console.log(`Welcome, ${name}! You are at level ${level}.`);
}

displayUser(user); // -> Welcome, Alice! You are at level 10.