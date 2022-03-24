/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
    if(s.length == 0) {
        return 0;
    }

    let max = 0;
    let store = [];

    for (let i = 0; i < s.length; i++) {
        let index = store.indexOf(s[i]);

        if (index == -1) {
            // 沒有重複
            store.push(s[i]);
        } else {
            // 找到重複
            store.splice(0, index + 1);
            store.push(s[i]);
        }

        if (store.length > max) {
            max++;
        }
    }

    return max;
};


// -------------------------
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));