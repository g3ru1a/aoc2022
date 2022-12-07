import fs from "node:fs";
import part1 from "./part1";
import part2 from "./part2";

const input = fs.readFileSync('./day7/input.txt', 'utf8');


console.log(part1.run(input));
console.log(part2.run(input));