const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    let each = data.split('\n');
    let values = [];
    let current = 0;
    each.forEach((row) => {
        let value = parseInt(row);
        if(value > 0){
            current += value;
        }else {
            values.push(current);
            current = 0;
        }
    })
    values = values.sort((a,b) => b-a);

    console.log(values[0] + values[1] + values[2]);
});