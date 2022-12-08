export default {
    run(map: number[][]){
        let max_score = 0;
        for (let y = 1; y < map.length - 1; y++) {
            for (let x = 1; x < map[y].length - 1; x++) {
                let right = map[y].slice(x + 1)
                let left = map[y].slice(0, x).reverse();
                let top = map
                    .map((row: number[]) => row[x])
                    .splice(0, y).reverse();
                let bot = map
                    .map((row: number[]) => row[x])
                    .splice(y + 1);
                
                let score = this.directionScore(map[y][x], right);
                score *= this.directionScore(map[y][x], left);
                score *= this.directionScore(map[y][x], top);
                score *= this.directionScore(map[y][x], bot);

                if(score > max_score) max_score = score;
            }
        }
        console.log(max_score);
        
    },
    directionScore(check:number, direction: number[]){
        let dir_score = 0;
        for (let i = 0; i < direction.length; i++) {
            const tree = direction[i];
            if (check > tree) {
                dir_score++;
            } else {
                dir_score++;
                break;
            }
        }
        return dir_score;
    }
}