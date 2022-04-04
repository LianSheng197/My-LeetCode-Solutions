// 捨棄

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
    // 先複製一個陣列
    let clone = height.slice();

    // 排序兼整理
    let sorted = clone.map(
        (e, i) => ({ pos: i, val: e })
    ).sort(
        (a, b) => b.val - a.val
    );

    return sorted;
};


// ------------------------
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));