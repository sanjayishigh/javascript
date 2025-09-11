// --- Using 'let' for values that change ---
console.log("--- let ---");
let userScore = 100;
console.log("Initial score:", userScore);

userScore = 120; // Reassigning is allowed with 'let'
console.log("Updated score:", userScore);


// --- Using 'const' for constant values ---
console.log("\n--- const ---");
const username = "Alice";
console.log("Username:", username);

// The line below would cause a TypeError because you can't reassign a const.
// username = "Bob"; 


// --- 'const' with objects ---
console.log("\n--- const with objects ---");
const user = {
  name: "Bob",
  level: 5
};

// You can't reassign the 'user' variable itself...
// user = { name: "Charlie", level: 1 }; // This would be an error.

// ...but you CAN change the properties of the object it points to.
user.level = 6; 
console.log("User's new level:", user.level); // -> 6