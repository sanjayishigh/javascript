// 1. A JavaScript object
const user = {
  name: "Alice",
  id: 123,
  isAdmin: true,
  courses: ["HTML", "CSS"],
  logout: function() {} // This will be removed
};
console.log("Original JS Object:", user);

// 2. Convert the JS object to a JSON string with JSON.stringify()
const jsonString = JSON.stringify(user, null, 2); // The 2 adds nice formatting
console.log("--- Converted to JSON String ---");
console.log(jsonString);
console.log("Notice 'logout' function is gone.");

// 3. Convert a JSON string back to a JS object with JSON.parse()
const receivedData = '{"product":"Laptop","price":1200,"inStock":true}';
console.log("\n--- Received JSON String ---");
console.log(receivedData);

try {
  const productObject = JSON.parse(receivedData);
  console.log("Parsed back to JS Object:", productObject);
  
  // Now you can work with it like a normal object
  console.log("Product Name:", productObject.name); // Whoops, typo! This will be undefined.
  console.log("Product Name:", productObject.product);
} catch (error) {
  console.error("Failed to parse JSON:", error);
}