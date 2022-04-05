/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (strs.length === 1) {
        return strs[0];
    }

    let result = "";

    // 排序 (預設是根據字元排序)
    strs.sort();
    
    // 挑第一個跟最後一個的前兩個字串來比較
    for (let i = 0; i < strs[0].length; i++) {
        result += strs[0][i];

        if (!strs[strs.length - 1].startsWith(result)) {
            result = result.substring(0, result.length - 1);
            return result;
        }
    }

    return result;
};



// ----------------------------
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));