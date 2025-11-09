// Import DNS module
const dns = require('dns');

// 1️⃣ dns.lookup() - resolves a domain name to its IP address
dns.lookup('www.google.com', (err, address, family) => {
  if (err) throw err;
  console.log('1️⃣ lookup() - IP Address of www.google.com:', address);
  console.log('   Address Family:', family);
});

// 2️⃣ dns.resolve4() - resolves IPv4 addresses for the given hostname
dns.resolve4('www.google.com', (err, addresses) => {
  if (err) throw err;
  console.log('\n2️⃣ resolve4() - IPv4 addresses of www.google.com:', addresses);
});

// 3️⃣ dns.reverse() - performs reverse DNS lookup on an IP address
dns.lookup('www.google.com', (err, address) => {
  if (err) throw err;
  dns.reverse(address, (err, hostnames) => {
    if (err) throw err;
    console.log('\n3️⃣ reverse() - Hostnames for IP', address, ':', hostnames);
  });
});
