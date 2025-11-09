// Import the path module
const path = require('path');

// 1️⃣ path.basename() - Returns the last portion of a path (file name)
const filePath = '/Users/Pranav/Documents/node/path-demo/14-path-demo.js';
console.log("1. Basename:", path.basename(filePath)); 

// 2️⃣ path.dirname() - Returns the directory name of a path
console.log("2. Dirname:", path.dirname(filePath));

// 3️⃣ path.extname() - Returns the extension of the file
console.log("3. Extension:", path.extname(filePath));

// 4️⃣ path.join() - Joins all given path segments together
const fullPath = path.join('Users', 'Pranav', 'Documents', 'Project', 'index.html');
console.log("4. Joined Path:", fullPath);

// 5️⃣ path.resolve() - Resolves a sequence of paths into an absolute path
const absolutePath = path.resolve('folder1', 'folder2', 'file.txt');
console.log("5. Absolute Path:", absolutePath);
