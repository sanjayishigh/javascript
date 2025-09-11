// --- Explicit Conversion (The safe, recommended way) ---
console.log("--- Explicit Conversion ---");

const yearString = "2024";
const yearNumber = Number(yearString); // Explicitly convert to number
console.log(`The number is: ${yearNumber}`);
console.log(`Type of yearNumber: ${typeof yearNumber}`);

const scoreNumber = 100;
const scoreString = String(scoreNumber); // Explicitly convert to string
console.log(`The string is: "${scoreString}"`);
console.log(`Type of scoreString: ${typeof scoreString}`);


// --- Implicit Conversion (Can be dangerous) ---
console.log("\n--- Implicit Conversion ---");

// The '+' operator with a string causes concatenation
const result1 = "5" + 1; // JS converts the number 1 to a string "1"
console.log(`"5" + 1 = "${result1}" (This is a string!)`);

// The '-' operator causes a numeric conversion
const result2 = "5" - 1; // JS converts the string "5" to a number 5
console.log(`"5" - 1 = ${result2} (This is a number)`);


// --- NaN (Not-a-Number) ---
console.log("\n--- NaN ---");
const failedConversion = Number("hello");
console.log(`Number("hello") results in: ${failedConversion}`);