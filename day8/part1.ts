export default {
    run(map: number[][]){
        let total = map.length * 2 + (map[0].length - 2) + (map[map.length - 1].length - 2);

        for (let y = 1; y < map.length - 1; y++) {
            for (let x = 1; x < map[y].length - 1; x++) {
                let right = map[y]
                    .slice(x + 1)
                    .sort()
                    .reverse()[0];
                let left = map[y].slice(0, x).sort().reverse()[0];

                if (map[y][x] > right || map[y][x] > left) {
                    total++;
                    continue;
                }

                let top = map
                    .map((row: number[]) => row[x])
                    .splice(0, y)
                    .sort()
                    .reverse()[0];
                let bot = map
                    .map((row: number[]) => row[x])
                    .splice(y + 1)
                    .sort()
                    .reverse()[0];
                if (map[y][x] > top || map[y][x] > bot) {
                    total++;
                }
            }
        }

        return total;
    }
}