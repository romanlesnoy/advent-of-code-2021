const { readFile } = require('../data/day-01/read-file');

const data = readFile().trim().split('\n').map(value => parseInt(value, 10));

const countIncreasedValue = (values) => {
    let counter = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] < values[i+1]) {
            counter++
        }
    }
    return counter;
};

const sumSlidingWindow = (data) => {
    const sumsArray = [];

    for(let i = 2; i < data.length; i++) {
        const sum = data[i-2] + data[i-1] + data[i];
        sumsArray.push(sum);
    }
    return sumsArray;
}

const part1 = countIncreasedValue(data); //1754
const part2 = countIncreasedValue(sumSlidingWindow(data));//1789

console.log(part1);
console.log(part2);