const fs = require('fs/promises');
const path = require('path');
const filePath = path.join(__dirname, '..', '..', 'data', 'textfile.txt');

async function write(content) {
    await fs.writeFile(filePath, content);
}

async function read() {
    return await fs.readFile(filePath, 'utf-8');
}

module.exports = {
    write,
    read,
}