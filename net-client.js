const net = require('net');

// Connect to server
const client = net.createConnection({ port: 3000 }, () => {
  console.log("Connected to server!");

  // Send message to server
  client.write("Hello Server!");
});

// Read message from server
client.on("data", (data) => {
  console.log("Message from server:", data.toString());
  client.end(); // End connection
});

// When disconnected
client.on("end", () => {
  console.log("Disconnected from server!");
});
