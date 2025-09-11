// This function takes three arguments: name, age, and work.
function createUser(name, age, work) {
  // Instead of returning { name: name, age: age, work: work }...
  // We use the Enhanced Object Literal shorthand because the
  // variable names match the desired property keys.
  return {
    name,
    age,
    work,
  };
}

// Create a new user by calling the function
const user1 = createUser("HuXn", 19, "Programmer");

// Create another user
const user2 = createUser("Alice", 30, "Designer");

// Log the results to the console
console.log("--- User 1 ---");
console.log(user1);
// Expected output: { name: 'HuXn', age: 19, work: 'Programmer' }

console.log("\n--- User 2 ---");
console.log(user2);
// Expected output: { name: 'Alice', age: 30, work: 'Designer' }