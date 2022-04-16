/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
const waysToBuyPensPencils = function (total, cost1, cost2) {
    let result = 0;

    if (cost2 > cost1) {
        [cost1, cost2] = [cost2, cost1];
    }

    while (total >= 0) {
        result += Math.floor(total / cost2) + 1;
        total -= cost1;
    }

    return result;
};



// ------
console.log(waysToBuyPensPencils(20, 10, 5));