const fs = require("fs");

fs.readFile("example.txt", function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});