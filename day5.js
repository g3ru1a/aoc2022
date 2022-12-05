const fs = require('fs');

// Read input from file
let input = fs.readFileSync('input5.txt', 'utf8');
let lines = input.split('\n');

// Starting configuration
let stacks = [];
let i = 0;
while (i < lines.length && lines[i] !== '') {
    let line = lines[i];
    line.split('').forEach((char, index) => {
        if(char.match(/[a-z]/i)){
            if(!stacks[index]) stacks[index] = [];
            stacks[index].push(char);
        }
    });
    i++;
}
// Clear empty values
stacks = stacks.filter(s => s.length);
stacks = stacks.map(stack => stack.reverse());
// Skip blank line
i += 1;
// Rearrangement procedure steps
let steps = [];
while (i < lines.length) {
    let line = lines[i].split(' ');
    steps.push([parseInt(line[1]), parseInt(line[3])-1, parseInt(line[5])-1]);
    i++;
}
let run = 2;
// PART 1
// Simulate rearrangement procedure
if(run === 1){
    for (let step of steps) {
        // Unpack step
        let num_crates = step[0];
        let from_stack = step[1];
        let to_stack = step[2];

        // Move crates from one stack to another
        for (let i = 0; i < num_crates; i++) {
            let crate = stacks[from_stack].pop();
            stacks[to_stack].push(crate);
        }
    }

    // Get top crate from each stack
    let top_crates = stacks.map(stack => stack.pop());

    // Print answer
    console.log('PART 1: '+top_crates.join(''));
}

// PART 2
if(run === 2){
    // Simulate rearrangement procedure
    for (let step of steps) {
        // Unpack step
        let num_crates = step[0];
        let from_stack = step[1];
        let to_stack = step[2];
        let temp_stack = [];
        // Move crates from one stack to another
        for (let i = 0; i < num_crates; i++) {
            temp_stack.push(stacks[from_stack].pop());
        }
        temp_stack.reverse();
        temp_stack.forEach(crate => stacks[to_stack].push(crate));
    }

    // Get top crate from each stack
    let top_crates = stacks.map(stack => stack.pop());

    // Print answer
    console.log('PART 2: '+top_crates.join(''));
}