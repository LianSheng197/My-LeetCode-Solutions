/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    /**
     * @param {number} startIndex
     * @param {number} endIndex
     * @returns {number}
     */
    const binarySearch = function (startIndex, endIndex) {
        if (startIndex > endIndex) {
            return -1;
        }

        const middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (nums[middleIndex] > target) {
            // 遞增陣列，目標值較小
            return binarySearch(0, middleIndex - 1);
        } else if (nums[middleIndex] < target) {
            // 遞增陣列，目標值較大
            return binarySearch(middleIndex + 1, endIndex);
        } else {
            return middleIndex;
        }
    };

    return binarySearch(0, nums.length - 1);
};


// -----------------------
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([-1, 0, 5], -1));