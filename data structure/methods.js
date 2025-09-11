// 1. Create an object with properties and methods
const player = {
  name: "Leo",
  health: 100,
  
  // Method using shorthand syntax
  getDescription() {
    // 'this' refers to the 'player' object
    return `Player: ${this.name}, Health: ${this.health}`;
  },
  
  // Method that modifies the object's state
  takeDamage(amount) {
    this.health = this.health - amount;
    console.log(`${this.name} took ${amount} damage!`);
  }
};

// 2. Call the methods
console.log("--- Initial State ---");
console.log(player.getDescription()); // -> "Player: Leo, Health: 100"

// 3. Call a method that changes the object
player.takeDamage(20);

console.log("\n--- After Taking Damage ---");
console.log(player.getDescription()); // -> "Player: Leo, Health: 80"