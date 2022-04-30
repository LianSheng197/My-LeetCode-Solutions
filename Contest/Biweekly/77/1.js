/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
const countPrefixes = function (words, s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const sub = s.substring(0, i + 1);

        if (words.indexOf(sub) !== -1) {
            result += words.filter(e => sub === e).length;
        }
    }

    return result;
};



// --------------
console.log(countPrefixes(["a","b","c","ab","bc","abc"], "abc"));
console.log(countPrefixes(["a", "a"], "aa"));
console.log(countPrefixes(["h","zz","yq","zz"], "zz"));