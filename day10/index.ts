import fs from "node:fs";

let commands = fs
    .readFileSync("./day10/input.txt", "utf8")
    .split("\n");


let ints = [20, 60, 100, 140, 180, 220];

let cycle = 0;  
let x = 1;
let sum = 0;

let crt_row: string[] = [];

commands.forEach(command => {
    let args = command.split(' ');

    if(args[0] == "noop"){
        cycle++;

        cycleCheck(cycle, x);
        renderCycle(cycle, x);
    }else{
        cycle++;
        cycleCheck(cycle, x);
        renderCycle(cycle, x);

        cycle++;
        cycleCheck(cycle, x);
        renderCycle(cycle, x);
        x += parseInt(args[1]);
    }
    
})

function renderCycle(cycle: number, x: number){
    let norm_cycle: number = (cycle-1)%40;
    
    let pos = [x, x-1, x+1];
    if (pos.includes(norm_cycle)) {
        crt_row[norm_cycle] = "#";
    }else{
        crt_row[norm_cycle] = '.';
    }
    if(norm_cycle == 39){
        console.log(crt_row.join(""), cycle);
        crt_row = [];
    }
}

function cycleCheck(cycle: number, x: number){
    if (ints.includes(cycle)) {
        sum += cycle * x;
    }
}

console.log(sum);
