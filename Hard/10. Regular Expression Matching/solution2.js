/**
 * @param {string} s string
 * @param {string} p pattern
 * @return {boolean}
 */
let isMatch = function (s, p) {
    // 用來加速的暫存
    let store = {};

    /**
     * 遞迴檢查
     * @param {number} sIndex
     * @param {number} pIndex
     * @returns {boolean}
     */
    let match = function(sIndex, pIndex) {
        // 包含在暫存中
        if(store[`s${sIndex}p${pIndex}`] !== undefined) {
            return store[`s${sIndex}p${pIndex}`];
        }

        // 已完成配對
        if(sIndex === s.length && pIndex === p.length) {
            return true;
        }

        // 爲了配對可能使 sIndex 超出長度
        if(sIndex > s.length) {
            return false;
        }

        let result = null;

        if(s[sIndex] === p[pIndex] || p[pIndex] === ".") {
            // 字元相同，或 pattern 等於 .

            if(p[pIndex + 1] === "*") {
                // 有效字元且後面帶 '*'
                // 需處理兩種情況

                // 狀況 1：嘗試無視此組合，直接跳過，偏移 pattern
                // 狀況 2：嘗試視爲有效組合，開始偏移 string
                // 結果：只要有一種狀況成立即可
                // Sol2: 這樣寫跟 Sol1 是一樣的，只不過可以減少記憶體開支，且有機會節省一半操作
                result = match(sIndex, pIndex+2) || match(sIndex+1, pIndex);
            } else {
                // 配對到固定字元，string 及 pattern 同時偏移
                result = match(sIndex+1, pIndex+1);
            }
        } else {
            // 字元不同，且 pattern 不等於 .

            if(p[pIndex + 1] === "*") {
                // 後面帶 '*'，直接忽略此 ?*
                result = match(sIndex, pIndex+2);
            } else {
                result = false;
            }
        }

        store[`s${sIndex}p${pIndex}`] = result;
        return result;
    }    

    return match(0, 0);
};



// -----------------------
console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("ab", ".*"));
console.log(isMatch("abcccccd", "a.c*d"));
console.log(isMatch("abc", "..*.*.*c.*"));
console.log(isMatch("aab", "c*a*b"));