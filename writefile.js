const fs = require("fs");

const content = "Hello Pranav!\nThis file is created using Node.js File System module.";

// Writing data to a file
fs.writeFile("output.txt", content, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully!");
  });