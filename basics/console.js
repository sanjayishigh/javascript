// --- console.log(): For general messages and variables ---
console.log("Hello, developer!");
const user = { name: "Alice", id: 42 };
console.log("Here is the user object:", user);


// --- console.error() and console.warn(): For important messages ---
console.warn("This is a warning. Something might be wrong.");
console.error("This is an error! An operation failed.");


// --- console.table(): For viewing arrays and objects clearly ---
const users = [
  { name: "Alice", role: "Admin" },
  { name: "Bob", role: "User" },
];
console.log("\n--- Displaying data with console.table() ---");
console.table(users);


// --- console.group(): For organizing logs ---
console.log("\n--- Organizing with console.group() ---");
console.group("User Details"); // Start an indented group
  console.log(`Name: ${user.name}`);
  console.log(`ID: ${user.id}`);
console.groupEnd(); // End the group


// --- console.time(): For measuring performance ---
console.log("\n--- Measuring time with console.time() ---");
console.time("My Test Timer"); // Start the timer

// Simulate a task that takes some time
let total = 0;
for (let i = 0; i < 100000; i++) {
  total += i;
}

console.timeEnd("My Test Timer"); // Stop the timer and log the result