// Import the net module
const net = require('net');

// 1️⃣ Create a server
const server = net.createServer((socket) => {
  console.log("Client connected!");

  // 2️⃣ Send message to client
  socket.write("Hello from server!");

  // 3️⃣ Receive data from client
  socket.on("data", (data) => {
    console.log("Received from client:", data.toString());
  });

  // 4️⃣ Detect when client disconnects
  socket.on("end", () => {
    console.log("Client disconnected!");
  });
});

// 5️⃣ Listen on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000...");
});
