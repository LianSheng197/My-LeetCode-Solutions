/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
let search = function (nums, target) {
    if (nums.length < 2) {
        for (let num of nums) {
            if (num == target) {
                return true;
            }
        }
    } else {
        for (let i = 0; i < nums.length - 1; i++) {
            // 發現樞紐
            if (nums[i] > nums[i + 1]) {
                // 檢查目前這兩個數是否爲目標
                if (nums[i] == target || nums[i + 1] == nums) {
                    return 1;
                }

                // 檢查目標值是否大於陣列第一個值
                if (target > nums[0]) {
                    return false;
                }
            }

            if (nums[i] == target) {
                return true;
            }
        }
    }

    if(target == nums[nums.length - 1]) {
        return true;
    }

    return false;
};


// ---------------------
console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
console.log(search([], 3));