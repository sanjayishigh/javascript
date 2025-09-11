// 1. Create a Date object for the current moment
const now = new Date();
console.log("Current Date Object:", now);

// 2. Get individual components from the date
const year = now.getFullYear();
const month = now.getMonth(); // This will be a number from 0-11
const day = now.getDate();

// We add 1 to the month for a human-readable format
console.log(`Today is: ${year}-${month + 1}-${day}`);

// 3. Create a Date object for a specific date
// Note: Month 11 is December because of the 0-index.
const christmas = new Date("2025-12-25");
console.log("Christmas 2025 Object:", christmas);

// 4. Format dates into readable strings
console.log("Current time (local format):", now.toLocaleDateString());
console.log("Christmas (local format):", christmas.toLocaleDateString());