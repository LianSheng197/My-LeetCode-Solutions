/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumAverageDifference = function (nums) {
    let min = Number.MAX_SAFE_INTEGER;
    let result = -1;

    let leftSum = 0;
    let rightSum = nums.reduce((a, b) => a + b, 0);

    for (let i = 0; i < nums.length; i++) {
        leftSum += nums[i];
        rightSum -= nums[i];

        const leftAvg = Math.floor(leftSum / (i + 1));
        const rightAvg = Math.floor(i < nums.length - 1 ? rightSum / (nums.length - i - 1) : 0);
        const abs = Math.abs(leftAvg - rightAvg);

        if (abs < min) {
            result = i;
            min = abs;
        }
    }

    return result;
};



// -------------------------
console.log(minimumAverageDifference([2, 5, 3, 9, 5, 3]));
console.log(minimumAverageDifference([0]));    