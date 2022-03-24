/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
    /** @type {Object.<string, number>} */
    let store = {};

    for (let i = 0; i < nums.length; i++) {
        if(store[nums[i]] !== undefined) {
            return [store[nums[i]], i];
        }   

        store[target - nums[i]] = i;
    }

    return [];
};


// --------------------------
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));