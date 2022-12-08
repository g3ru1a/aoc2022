import fs from "node:fs";
import part2 from "./part2";
import part1 from "./part1";

const input = fs.readFileSync("./day8/input.txt", "utf8");

const map: number[][] = [];
let rows = input.split("\n");
rows.forEach((row, i) => map[i] = row.split('').map(x => parseInt(x)));

console.log(part1.run(map));
console.log(part2.run(map));
