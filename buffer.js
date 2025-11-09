
const buf1 = Buffer.alloc(10);
console.log(buf1); // Output: <Buffer 00 00 00 00 00 00 00 00 00 00>

const buf2 = Buffer.from('Hello, Node.js!', 'utf8');
console.log(buf2); // Output: <Buffer 48 65 6c 6c 6f 2c 20 4e 6f 64 65 2e 6a 73 21>


console.log(buf2.toString('utf8')); 