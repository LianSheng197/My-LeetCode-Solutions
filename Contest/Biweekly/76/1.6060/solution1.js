/**
 * @param {number[]} nums
 * @return {number}
 */
const findClosestNumber = function (nums) {
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (Math.abs(nums[i]) <= Math.abs(result)) {
            if (Math.abs(nums[i]) < Math.abs(result) || nums[i] > result) {
                result = nums[i];
            }
        }
    }

    return result;
};



// ------
console.log(findClosestNumber([2, -1, 1]));