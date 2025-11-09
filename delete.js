const fs = require('fs');

fs.rmdir('name', (err) => {
    if (err) {
        console.error('Error removing folder:', err);
    } else {
        console.log('Folder removed successfully!');
    }
});
