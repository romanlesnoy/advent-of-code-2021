const fs = require('fs');
const path = require('path');

module.exports.readFile = () => {
    const filePath = path.join(__dirname, 'input.txt');
    const inputData = fs.readFileSync(filePath, { encoding: 'utf8' });
    return inputData;
};
