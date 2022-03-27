/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
let kWeakestRows = function (mat, k) {
    let data = {};
    let result = [];

    // 計算
    for (let i = 0; i < mat.length; i++) {
        let sum = 0;

        for (let j = 0; j < mat[i].length; j++) {
            sum += mat[i][j];
        }

        data[i] = sum;
    }

    // 排序
    // 這題不是演算法題目，懶得自己實現，只好直接沿用 Array.prototype.sort() 了
    data = Object.entries(data).sort((a, b) => a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]);

    // 取前 k 名
    for(let i=0; i<k; i++) {
        result.push(data[i][0] - 0);
    }

    return result;
};



// ----------------------------
console.log(kWeakestRows([
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]
], 3));
console.log(kWeakestRows([
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0]
], 2));