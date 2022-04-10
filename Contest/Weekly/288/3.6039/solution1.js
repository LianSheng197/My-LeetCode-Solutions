/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumProduct = function (nums, k) {
    // 盡可能使所有數字相等
    // 找出唯一數，並遞減排序
    if (nums.length === 1) {
        return nums[0] + k;
    }

    let allNumbers = [...new Set(nums)].sort((a, b) => b - a);

    while (k > 0 && allNumbers.length >= 2) {
        const min = allNumbers[allNumbers.length - 1];

        let index;
        while (index = nums.indexOf(min), index !== -1 && k > 0) {
            nums[index]++;
            k--;

            if (allNumbers.indexOf(nums[index]) === -1) {
                allNumbers.splice(index - 1, 0, nums[index]);
            }
            if (nums.indexOf(min) === -1) {
                allNumbers.pop();
            }
        }
    }

    if (k > 0) {
        let diff = Math.floor(k / nums.length);
        let left = k % nums.length;

        for (let i = 0; i < nums.length; i++) {
            nums[i] += diff;
            if (left > 0) {
                nums[i]++;
                left--;
            }
        }
    }

    let result = 1;
    for (let i = 0; i < nums.length; i++) {
        result *= nums[i];
    }

    return result;
};



// -----------------------
console.log(maximumProduct([0, 4], 5));
console.log(maximumProduct([6, 3, 3, 2], 2));
console.log(maximumProduct([7, 10, 6, 1, 8], 5));