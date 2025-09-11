// --- for loop ---
// Best for a known number of iterations.
console.log("--- for loop (counts 1 to 5) ---");

for (let i = 1; i <= 5; i++) {
  console.log(`Iteration: ${i}`);
}


// --- while loop ---
// Best when the number of iterations is unknown.
console.log("\n--- while loop (countdown from 3) ---");

let countdown = 3;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}...`);
  countdown--; // This update is crucial to prevent an infinite loop!
}
console.log("Blast off!");


// --- Looping through an array ---
console.log("\n--- Looping through an array ---");
const colors = ["Red", "Green", "Blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(`Color at index ${i} is ${colors[i]}`);
}


// --- Using 'break' ---
console.log("\n--- Using 'break' ---");
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    console.log("Found the number 4, breaking out of the loop!");
    break; // Exit the loop now
  }
  console.log(`Currently at number ${i}`);
}