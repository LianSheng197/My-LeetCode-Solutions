/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
let findWinners = function (matches) {
    let players = {};
    let winner0 = [];
    let winner1 = [];

    matches.forEach(match => {
        if (players[`${match[0]}`] === undefined) {
            players[`${match[0]}`] = {
                win: 0,
                lose: 0
            };
        }
        if (players[`${match[1]}`] === undefined) {
            players[`${match[1]}`] = {
                win: 0,
                lose: 0
            };
        }

        players[`${match[0]}`].win++;
        players[`${match[1]}`].lose++;
    });

    Object.keys(players).forEach(id => {
        if (players[id].lose === 0) {
            winner0.push(id);
        } else if (players[id].lose === 1) {
            winner1.push(id);
        }
    });

    return [winner0, winner1];
};


// ---------------
console.log(findWinners([[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]));
console.log(findWinners([[2, 3], [1, 3], [5, 4], [6, 4]]));