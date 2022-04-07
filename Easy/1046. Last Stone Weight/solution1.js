/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
    /**
     * @param {number[]} stones
     * @return {number[]}
     */
    const smash = function (stones) {
        if (stones.length <= 1) {
            return stones;
        }

        const s = stones.slice();
        s.sort((a, b) => b - a);

        if (s[0] === s[1]) {
            return smash(s.slice(2));
        } else {
            const temp = s.slice(2);
            temp.unshift(s[0] - s[1]);
            return smash(temp);
        }
    };

    const result = smash(stones);
    return result.length > 0 ? result[0] : 0;
};



// -----------------------------------------
console.log(lastStoneWeight([2,7,4,1,8,1]));
console.log(lastStoneWeight([1]));