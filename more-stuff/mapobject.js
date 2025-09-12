// 1. Create a new Map to store user roles
const userRoles = new Map();

// 2. Create some objects to use as keys
const userAlice = { name: "Alice" };
const userBob = { name: "Bob" };

// 3. Set key-value pairs
// We are using objects and strings as keys.
userRoles.set(userAlice, "Admin");
userRoles.set(userBob, "Editor");
userRoles.set("Charlie", "Viewer"); // A string key

console.log("--- The Map ---");
console.log(userRoles);


// 4. Get values and check for keys
console.log("\n--- Getting & Checking ---");
console.log("Bob's role:", userRoles.get(userBob)); // -> "Editor"
console.log("Does the map have Charlie?", userRoles.has("Charlie")); // -> true
console.log("Total entries in the map:", userRoles.size); // -> 3


// 5. Iterate over the map using a for...of loop
console.log("\n--- Iterating over the Map ---");
// We use destructuring `[user, role]` to unpack each entry.
for (const [user, role] of userRoles) {
  // If the key is an object, we access its 'name' property for a clean log.
  const name = typeof user === 'object' ? user.name : user;
  console.log(`${name}'s role is: ${role}`);
}