function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// calling greet() with a callback
greet("Pranav", sayGoodbye);

console.log("Program executed successfully.");
