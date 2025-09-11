// 1. Create an object literal
// This object represents a user.
const user = {
  name: "Alice",
  level: 10,
  isSubscribed: true,
  skills: ["HTML", "CSS"]
};

console.log("Original user object:", user);

// 2. Access properties using dot notation
console.log("\n--- Accessing with Dot Notation ---");
console.log("User's name:", user.name);    // -> "Alice"
console.log("User's level:", user.level);   // -> 10

// 3. Access a property using bracket notation
console.log("\n--- Accessing with Bracket Notation ---");
console.log("Subscription status:", user['isSubscribed']); // -> true

// 4. Modify and add properties
console.log("\n--- Modifying the Object ---");
user.level = 11; // Change the value of an existing property
user.location = "Digital City"; // Add a new property

console.log("Updated user object:", user);