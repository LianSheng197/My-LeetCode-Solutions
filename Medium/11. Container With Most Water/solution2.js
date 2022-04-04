/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    let result = 0;

    while(leftIndex < rightIndex) {
        // 取得短端
        let min = Math.min(height[leftIndex], height[rightIndex]);
        // 計算目前面積
        let currentSize = (rightIndex - leftIndex) * min;

        if(currentSize > result) {
            result = currentSize;
        }

        // 由於要向中心縮減，X 軸長肯定是越來越短
        // 因此必須找兩側短端，優先替換掉短端才有機會使面積變大
        if(height[leftIndex] === min) {
            // 若左側比較短
            leftIndex++;
        } else {
            // 若右側比較短
            rightIndex--;
        }
    }

    return result;
};


// ------------------------
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));