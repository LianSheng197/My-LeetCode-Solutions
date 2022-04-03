/**
 * @param {number[]} nums
 * @return {number}
 */
let minOperations = function (nums) {
    let result = 0;
    const currentMax = {
        pos: 0,
        val: 0
    };

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > currentMax.val + (i - currentMax.pos)) {
            // 如果大於目前記錄中的最大數（加偏移值），不需要操作，只需要更新最大值
            currentMax.pos = i;
            currentMax.val = nums[i];
        } else {
            // 如果沒有大於最大數加偏移值，那就看要增加多少
            result += (currentMax.val - nums[i]) + (i - currentMax.pos);
        }
    }

    return result;
};



// ----------
console.log(minOperations([1, 1, 1]));
console.log(minOperations([1, 5, 2, 4, 1]));
console.log(minOperations([8]));