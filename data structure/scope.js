// 1. Global Scope
// This variable is accessible everywhere.
const globalVar = "I am GLOBAL";

console.log(globalVar); // -> "I am GLOBAL"

function someFunction() {
  // 2. Function Scope
  // This variable is only accessible inside someFunction.
  const functionVar = "I am in a FUNCTION";
  
  console.log(globalVar);     // -> Can access the outer (global) scope
  console.log(functionVar); // -> Can access its own scope

  if (true) {
    // 3. Block Scope
    // This variable is only accessible inside this 'if' block.
    const blockVar = "I am in a BLOCK";
    
    console.log(globalVar);     // -> Can access global scope
    console.log(functionVar); // -> Can access parent function's scope
    console.log(blockVar);      // -> Can access its own scope
  }
  
  // This would cause a ReferenceError because blockVar only exists inside the 'if' block.
  // console.log(blockVar); 
}

// Call the function to execute the code inside it
someFunction();

// This would cause a ReferenceError because functionVar only exists inside the function.
// console.log(functionVar);