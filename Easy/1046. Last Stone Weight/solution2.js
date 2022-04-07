/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        const heaviest1 = Math.max(...stones);
        stones.splice(stones.indexOf(heaviest1), 1);
        const heaviest2 = Math.max(...stones);
        stones.splice(stones.indexOf(heaviest2), 1);

        if (heaviest1 !== heaviest2) {
            stones.push(heaviest1 - heaviest2);
        }
    }

    return stones[0] ? stones[0] : 0;
};



// -----------------------------------------
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1]));