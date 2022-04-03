/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
let convertTime = function (current, correct) {
    if (current === correct) {
        return 0;
    }

    let cur = current.split(":");
    let curMins = (cur[0] - 0) * 60 + (cur[1] - 0);

    let cor = correct.split(":");
    let corMins = (cor[0] - 0) * 60 + (cor[1] - 0);

    let diff = corMins - curMins;

    let count = 0;

    while (diff >= 60) {
        count++;
        diff -= 60;
    }

    while (diff >= 15) {
        count++;
        diff -= 15;
    }

    while (diff >= 5) {
        count++;
        diff -= 5;
    }

    while (diff >= 1) {
        count++;
        diff -= 1;
    }

    return count;
};




// ------------
console.log(convertTime("02:30", "04:35"));
console.log(convertTime("11:00", "11:01"));
console.log(convertTime("00:00", "23:59"));