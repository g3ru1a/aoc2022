const fs = require('fs');

//! PART ONE
fs.readFile('./input2.txt', 'utf8', (err, data) => {
    let rounds = data.split('\n');
    let enemy_plays = rounds.map(v => v.split(' ')[0]);
    let my_plays = rounds.map((v) => v.split(" ")[1]);

    let total = 0;

    rounds.forEach((v, index) => {
        let round_score = outcome(enemy_plays[index], my_plays[index]);

        if(my_plays[index] === "X") round_score += 1;
        if (my_plays[index] === "Y") round_score += 2;
        if (my_plays[index] === "Z") round_score += 3;

        total += round_score;
    });

    console.log(total);
});


function outcome(p1, p2){

    //A - Rock / B - Paper / C - Scissors
    //x - Rock / Y - paper / Z - Scissors

    if(p1 == 'A' && p2 == 'Y') return 6;
    if(p1 == 'A' && p2 == 'X') return 3;
    if(p1 == 'A' && p2 == 'Z') return 0;


    if(p1 == 'B' && p2 == 'Y') return 3;
    if(p1 == 'B' && p2 == 'X') return 0;
    if(p1 == 'B' && p2 == 'Z') return 6;


    if(p1 == 'C' && p2 == 'Y') return 0;
    if(p1 == 'C' && p2 == 'X') return 6;
    if(p1 == 'C' && p2 == 'Z') return 3;

}
//! PART TWO

function outcome2 (out) {
    if (out == "X") return 0;
    if (out == "Y") return 3;
    if (out == "Z") return 6;
}

function pickHand(enemy_hand, outcome){
    if(outcome === 'Y') return enemy_hand;

    if(outcome === 'X') {
        if (enemy_hand == 'A') return 'C';
        if (enemy_hand == "B") return "A";
        if (enemy_hand == "C") return "B";
    }

    if (outcome === "Z") {
        if (enemy_hand == "A") return "B";
        if (enemy_hand == "B") return "C";
        if (enemy_hand == "C") return "A";
    }
}

fs.readFile("./input2.txt", "utf8", (err, data) => {
    let rounds = data.split("\n");
    let enemy_plays = rounds.map((v) => v.split(" ")[0]);
    let round_outcome = rounds.map((v) => v.split(" ")[1]);

    let total = 0;

    rounds.forEach((v, index) => {
        let round_score = outcome2(round_outcome[index]);
        let my_hand =pickHand(enemy_plays[index], round_outcome[index]);

        if (my_hand === "A") round_score += 1;
        if (my_hand === "B") round_score += 2;
        if (my_hand === "C") round_score += 3;

        total += round_score;
    });

    console.log(total);
});