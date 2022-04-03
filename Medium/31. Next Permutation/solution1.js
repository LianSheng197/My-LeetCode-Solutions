/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nextPermutation = function (nums) {
    let firstAscendingIndex = null;

    // 先取得陣列末端第一個遞增數的位置
    // 例：[3,2,{1},5] --> 2
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i + 1] > nums[i]) {
            firstAscendingIndex = i;
            break;
        }
    }

    if (firstAscendingIndex === null) {
        // 如果找不到第一個遞增數的位置，說明整個陣列是遞減的
        // 此時只需要讓陣列反轉一次就可
        // 正好 Array.prototype.reverse() 本身就是原地反轉，直接拿來用XD
        nums.reverse();
    } else {
        let secondIndex = null;
        let low = firstAscendingIndex + 1;
        let high = nums.length - 1;

        // 有找到第一個遞增數，接著要從末端找到大於第一個遞增數的位置
        for (let i = nums.length - 1; i >= firstAscendingIndex; i--) {
            if (nums[i] > nums[firstAscendingIndex]) {
                secondIndex = i;
                break;
            }
        }

        if (secondIndex !== null) {
            // 若有找到第二個索引，則交換兩位置的值
            [nums[firstAscendingIndex], nums[secondIndex]] = [nums[secondIndex], nums[firstAscendingIndex]];
        }

        // 反轉第一個索引後的所有值
        // 例：[1,2,{3},4,5,6,7] --> [1,2,{3},7,6,5,4]
        while (low < high) {
            [nums[low], nums[high]] = [nums[high], nums[low]];

            low++;
            high--;
        }
    }
};


// -----------------------
const a = [1, 2, 3];
const b = [3, 2, 1];
const c = [1, 1, 5];
nextPermutation(a);
nextPermutation(b);
nextPermutation(c);
console.log(a);
console.log(b);
console.log(c);
