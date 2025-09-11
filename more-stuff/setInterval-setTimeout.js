// --- setTimeout: Runs once after a delay ---
console.log("Scheduling a message for 2 seconds from now...");

const timeoutId = setTimeout(() => {
  console.log("Hello from setTimeout! (This message was delayed)");
}, 2000); // 2000ms = 2 seconds

// To cancel it, you would use: clearTimeout(timeoutId);


// --- setInterval: Runs repeatedly ---
console.log("Starting a counter that runs every 1 second...");

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Interval count: ${count}`);

  if (count === 3) {
    // Stop the interval when the count reaches 3
    clearInterval(intervalId);
    console.log("Interval stopped!");
  }
}, 1000); // 1000ms = 1 second