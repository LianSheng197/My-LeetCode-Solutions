/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    let result = "";

    for (let i = 0; i < strs[0].length; i++) {
        result += strs[0][i];

        for (let j = 0; j < strs.length; j++) {
            if (!strs[j].startsWith(result)) {
                result = result.substring(0, result.length - 1);
                return result;
            }
        }
    }


    return result;
};



// ----------------------------
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));