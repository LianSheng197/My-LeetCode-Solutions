/**
 * @param {string} s
 * @return {string}
 */
let replaceDigits = function (s) {
    /**
     * 根據偏移值得到變換過的字元
     * @param {string} char
     * @param {number} num
     * @returns {string}
     */
    const shift = function (char, num) {
        return String.fromCharCode(char.charCodeAt(0) + num);
    };

    let result = "";
    for (let i = 0; i < s.length; i += 2) {
        result += s[i];
        if(s[i+1] !== undefined) {
            result += shift(s[i], s[i+1] - 0)
        }
    }

    return result;
};


// ----------------------------
console.log(replaceDigits("a1c1e1"));
console.log(replaceDigits("a1b2c3d4e"));
console.log(replaceDigits("v0g6s4d"));