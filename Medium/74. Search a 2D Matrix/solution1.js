/**
 * @typedef MatrixIndex
 * @property {number} row
 * @property {number} col
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function (matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    /**
     * 將一維 index 轉成二維
     * @param {number} index1D
     * @returns {MatrixIndex}
     */
    let indexTranslate = function (index1D) {
        return {
            row: Math.floor(index1D / cols),
            col: index1D % cols
        };
    };

    /**
     * 二分搜尋演算法
     * @param {number} startIndex
     * @param {number} endIndex
     * @returns {MatrixIndex|null}
     */
    let binarySearch = function (startIndex, endIndex) {
        if (startIndex > endIndex) {
            return null;
        }

        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        let translated = indexTranslate(middleIndex);

        if (matrix[translated.row][translated.col] > target) {
            // 中間值 > 目標
            return binarySearch(0, middleIndex - 1);
        } else if (matrix[translated.row][translated.col] < target) {
            // 中間值 < 目標
            return binarySearch(middleIndex + 1, endIndex);
        } else {
            // 中間值 = 目標 (找到答案)
            return translated;
        }
    };

    return binarySearch(0, rows * cols - 1) !== null;
};



// -----------------------
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));