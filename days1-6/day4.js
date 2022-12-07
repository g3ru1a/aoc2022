
//!PART 1
// Read the input from a file (assuming the input is stored in a file called 'input.txt')
const fs = require('fs');
const input = fs.readFileSync('input4.txt', 'utf-8');

// Split the input into pairs
const pairs = input.split('\n');

// Split each pair into two separate ranges
const ranges = pairs.map(pair => pair.split(','));

// Count the number of pairs in which one range fully contains the other
let numOverlappingPairs = 0;
for (let i = 0; i < ranges.length; i++) {
    const [range1, range2] = ranges[i];
    let [a, b] = range1.split('-');
    let [x, y] = range2.split('-');

    let diff_front = a-x > 0 ? 1 : a-x === 0 ? 0 : -1;
    let diff_back = b-y > 0 ? 1 : b-y === 0 ? 0 : -1;
    let sum = diff_back + diff_front;
    if(sum <= 1 && sum >= -1) {
        numOverlappingPairs++;
    }
    // console.log(`${a}-${b},${x}-${y} : ${diff_front} / ${diff_back} -- ${diff_back + diff_front}`);
}

console.log('PART1: ' + numOverlappingPairs);

//PART 2

numOverlappingPairs = 0;
for (let i = 0; i < ranges.length; i++) {
    const [range1, range2] = ranges[i];
    let [a, b] = range1.split('-');
    let [x, y] = range2.split('-');

    let diff_front = a-y > 0 ? 1 : a-y === 0 ? 0 : -1;
    let diff_back = b-x > 0 ? 1 : b-x === 0 ? 0 : -1;
    let sum = diff_back + diff_front;
    if(sum <= 1 && sum >= -1) {
        numOverlappingPairs++;
    }
    // console.log(`${a}-${b},${x}-${y} : ${diff_front} / ${diff_back} -- ${diff_back + diff_front}`);
}

console.log('PART2: '+numOverlappingPairs);