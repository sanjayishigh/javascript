// --- Strict Equality (===) vs. Loose Equality (==) ---
console.log("--- Strict (===) vs. Loose (==) ---");
const num = 10;
const str = "10";

// Loose equality converts the string to a number, resulting in true.
console.log(`Loose (10 == "10"):  ${num == str}`); // -> true (Avoid this!)

// Strict equality checks the type, so it correctly returns false.
console.log(`Strict (10 === "10"): ${num === str}`); // -> false (Use this!)


// --- Strict Inequality (!==) ---
console.log("\n--- Strict Inequality (!==) ---");
console.log(`10 !== "10": ${10 !== "10"}`); // -> true (different types)
console.log(`10 !== 20:   ${10 !== 20}`);   // -> true (different values)
console.log(`10 !== 10:   ${10 !== 10}`);   // -> false


// --- Relational Operators (>, >=, etc.) ---
console.log("\n--- Relational Operators ---");
const userAge = 20;
console.log(`Is age > 18? ${userAge > 18}`);     // -> true
console.log(`Is age >= 21? ${userAge >= 21}`);    // -> false
console.log(`Is age <= 20? ${userAge <= 20}`);    // -> true