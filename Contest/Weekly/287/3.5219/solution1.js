/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
let maximumCandies = function (candies, k) {
    let sum = candies.reduce((a, b) => a + b, 0);

    if (sum < k) {
        return 0;
    }

    let max = Math.floor(sum / k);
    console.log(sum, max);

    for (let currentMax = max; currentMax > 0; currentMax--) {
        let count = 0;
        for(let pile of candies) {
            count += Math.floor(pile / currentMax);
        }    
        
        if (count >= k) {
            return currentMax;
        }
    }
};



// -------------------
console.log(maximumCandies([200, 0, 0], 4));
console.log(maximumCandies([2, 5], 11));
console.log(maximumCandies([4, 7, 5], 4));

