/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = function (grid, k) {
    const rows = grid.length;
    const cols = grid[0].length;

    /**
     * 將一維 index 轉成二維
     * @param {number} index1D
     */
    const indexTranslate = function (index1D) {
        return {
            row: Math.floor(index1D / cols),
            col: index1D % cols
        };
    };

    const limit = rows * cols;

    // 意外踩坑：
    // 沒辦法直接用 Array(rows).fill(Array(cols)) 產生二維陣列
    // 因爲裏面每個子陣列都是同一個參照
    const result = [];
    for(let i=0; i<rows; i++) {
        const subArray = [];

        for(let j=0; j<cols; j++) {
            subArray[j] = [];
        }

        result[i] = subArray;
    }

    for (let i = 0; i < limit; i++) {
        const from = indexTranslate(i);
        const to = indexTranslate((i+k) % limit);

        result[to.row][to.col] = grid[from.row][from.col];
    }


    return result;
};


// -----------------------------
console.log(shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1));
console.log(shiftGrid([[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], 4));
console.log(shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9));