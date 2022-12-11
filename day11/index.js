const fs = require('fs');

let input = fs.readFileSync("/home/g3/PhpstormProjects/AOC/day11/input.txt", "utf-8");

const parse = (input) =>
    input
        .split("\n\n")
        .map((group) => group.split("\n").map((lines) => lines.split(":")[1]))
        .map(([, items, op, ...test]) => [
            items.split(",").map(Number),
            [op.split(" ").slice(-2)].map(
                ([op, arg]) =>
                    (v) =>
                        op === "*" ? v * Number(arg === "old" ? v : arg) : v + Number(arg === "old" ? v : arg)
            ),
            test.map((t) => t.split(" ").map(Number).at(-1)),
        ])
        .map(([items, [op], [mod, t, f]]) => ({
            items,
            op,
            test: (v) => (v % mod ? f : t),
            mod,
            inspections: 0,
        }));

const evaluate = (input, divisor, rounds) => {
    const monkeys = parse(input);
    const divisors = monkeys.map(({ mod }) => mod).reduce((mul, v) => mul * v);

    while (rounds--)
        monkeys.forEach((m) => {
            m.inspections += m.items.length;
            m.items
                .map(m.op)
                .map((level) => Math.trunc(level / divisor) % divisors)
                .forEach((level) => monkeys[m.test(level)].items.push(level));
            m.items = [];
        });

    return monkeys
        .map(({ inspections }) => inspections)
        .sort((a, b) => b - a)
        .slice(0, 2)
        .reduce((mul, v) => mul * v);
};

const part1 = (input) => evaluate(input, 3, 20);
const part2 = (input) => evaluate(input, 1, 10000);

console.log(part1(input));
console.log(part2(input));