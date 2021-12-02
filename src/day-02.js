const { readFile } = require('../data/day-02/read-file');

const data = readFile()
    .trim()
    .split('\n')
    .map((value) => value.split(' '))
    .map(([direction, value]) => [direction, parseInt(value, 10)]);

const checkFinalPosition = (logs) => {
    let x = 0;
    let y = 0;

    for (let [direction, value] of logs) {
        if (direction === 'forward') {
            x += value;
        } else if (direction === 'down') {
            y += value;
        } else {
            y -= value;
        }
    }
    return x * y;
};

const checkFinalPositionWithAim = (logs) => {
    let x = 0;
    let y = 0;
    let aim = 0;

    for (let [direction, value] of logs) {
        if (direction === 'forward') {
            x += value;
            y += aim * value;
        } else if (direction === 'down') {
            aim += value;
        } else {
            aim -= value;
        }
    }
    return x * y;
};

const part1 = checkFinalPosition(data);
const part2 = checkFinalPositionWithAim(data)

console.log(part1); //1714680
console.log(part2); //1963088820
