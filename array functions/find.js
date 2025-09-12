// --- 1. Finding an Object in an Array ---
console.log("--- Finding a User by ID ---");
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Bob" } // Another user named Bob
];

// The callback returns true when it finds the user with id === 3
const foundUser = users.find(user => {
  console.log(`Checking user: ${user.name}`); // See how it stops after finding the match
  return user.id === 3;
});

console.log("Found user:", foundUser); // -> { id: 3, name: 'Charlie' }


// --- 2. Finding the First Match ---
console.log("\n--- Finding the First Match ---");

// It finds the first Bob and stops; it never gets to the second one.
const foundBob = users.find(user => user.name === "Bob");

console.log("Found the first Bob:", foundBob); // -> { id: 2, name: 'Bob' }


// --- 3. Handling a Case Where Nothing is Found ---
console.log("\n--- Handling 'undefined' ---");
const findDavid = users.find(user => user.name === "David");

if (findDavid) {
  console.log("Found David:", findDavid);
} else {
  // This block will run
  console.log("Could not find a user named David. Result is:", findDavid); // -> undefined
}