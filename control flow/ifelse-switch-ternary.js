// --- if / else if / else ---
// Used for a range of conditions.
console.log("--- if / else if / else ---");
const score = 85;
let grade;

if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B'; // This condition is met
} else {
  grade = 'C';
}
console.log(`A score of ${score} is a grade of '${grade}'.`);


// --- switch ---
// Used for comparing one value against multiple fixed options.
console.log("\n--- switch ---");
const day = "Wednesday";
let activity;

switch (day) {
  case "Monday":
    activity = "Go to work.";
    break; // The 'break' is essential!
  case "Saturday":
  case "Sunday":
    activity = "Relax!";
    break;
  default:
    activity = "It's a regular day.";
}
console.log(`On ${day}, the activity is: ${activity}`);


// --- Ternary Operator ---
// A clean shortcut for a simple if/else.
console.log("\n--- Ternary Operator ---");
const age = 20;
const canVote = age >= 18 ? "Yes, can vote." : "No, cannot vote.";

console.log(`Is the person 20 years old able to vote? ${canVote}`);