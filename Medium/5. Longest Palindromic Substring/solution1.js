/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function (s) {
    if (s.length == 0) {
        return "";
    }

    let longestSubstring = "";
    let currentHalfLength = 0;
    let store = [];

    for (let i = 0; i < s.length; i++) {
        let index = store.indexOf(s[i]);

        if (index == -1) {
            // 沒有重複
            
            if (store.length == currentHalfLength) {
                // 尚未進入回文階段
                store.push(s[i]);
                currentHalfLength = store.length;
            } else {
                // 需判斷回文狀態
            }
        } else {
            // 發現重複

            if (index === currentHalfLength - 1) {
                // 回文模式： ABCCBA
                // store: ABC, s[i]: C
            } else if(index === currentHalfLength - 2) {
                // 回文模式: ABCBA
                // store: ABC, s[i]: B
            } else {

            }
        }
    }
};






// -------------------------
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));