const os = require("os");

console.log("1️⃣ OS Type:", os.type());               // OS type (e.g., Windows_NT)
console.log("2️⃣ Platform:", os.platform());          // Platform (e.g., win32)
console.log("3️⃣ CPU Architecture:", os.arch());       // Architecture (e.g., x64)
console.log("4️⃣ Total Memory:", os.totalmem(), "bytes"); // Total system memory
console.log("5️⃣ Free Memory:", os.freemem(), "bytes");   // Available free memory

// Extra (optional)
console.log("6️⃣ Hostname:", os.hostname());
console.log("7️⃣ Uptime (seconds):", os.uptime());
