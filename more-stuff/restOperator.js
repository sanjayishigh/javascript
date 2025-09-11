// --- 1. Rest Parameter in a Function ---
// This function can accept any number of arguments.
// 'a' and 'b' will hold the first two arguments.
// 'rest' will be an array containing all other arguments.
function sumAll(a, b, ...rest) {
  console.log("First number:", a);
  console.log("Second number:", b);
  console.log("The 'rest' of the numbers are in an array:", rest);

  let total = a + b;
  for (const num of rest) {
    total += num;
  }
  return total;
}

const totalSum = sumAll(1, 2, 3, 4, 5);
console.log("Total sum:", totalSum); // -> 15


// --- 2. Rest in Array Destructuring ---
console.log("\n--- Rest in Array Destructuring ---");
const scores = [98, 85, 76, 60, 55];

// Get the first two scores, and collect the rest into a new array.
const [first, second, ...remainingScores] = scores;

console.log("First score:", first);             // -> 98
console.log("Second score:", second);           // -> 85
console.log("Remaining scores:", remainingScores); // -> [76, 60, 55]


// --- 3. Rest in Object Destructuring ---
console.log("\n--- Rest in Object Destructuring ---");
const user = {
  id: 1,
  name: "Alice",
  level: 10,
  country: "Canada"
};

// Extract the 'id', and collect the rest of the properties into a new object.
const { id, ...userDetails } = user;

console.log("User ID:", id);               // -> 1
console.log("User Details:", userDetails); // -> { name: 'Alice', level: 10, country: 'Canada' }