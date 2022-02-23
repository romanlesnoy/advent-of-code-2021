const { readFile } = require('../data/day-03/read-file');

const data = readFile()
    .trim()
    .split('\n')
    .map(binaryString => binaryString.split('').map(s => parseInt(s, 10)));


const entryLength = data[0].length;

console.log(data);
console.log(entryLength);

    