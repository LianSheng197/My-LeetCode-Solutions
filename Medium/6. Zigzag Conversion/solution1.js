/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function (s, numRows) {
    if (numRows == 1) {
        return s;
    }

    // kn+c
    let k = 2 * (numRows - 1);
    let result = "";

    for (let c = 0; c < numRows; c++) {
        if (c == 0) {
            // 第一列
            for (let n = 0; k * n < s.length; n++) {
                result += s[k * n];
            }
        } else if (c == numRows - 1) {
            // 最末列
            for (let n = 0; k * n + c < s.length; n++) {
                result += s[k * n + c];
            }
        } else {
            // 中間列，每列每個週期可能會有 2 個數
            for (let n = 0; k * n + c < s.length; n++) {
                result += s[k * n + c];

                if (k * n + k - c < s.length) {
                    result += s[k * n + k - c];
                }
            }
        }
    }

    return result;
};


// ---------------------------
console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));