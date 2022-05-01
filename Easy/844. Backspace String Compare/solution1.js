/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
    let strs = "";
    let strt = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") {
            strs = strs.substring(0, strs.length - 1);
        } else {
            strs += s[i];
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] === "#") {
            strt = strt.substring(0, strt.length - 1);
        } else {
            strt += t[i];
        }
    }

    return strs === strt;
};


// ----------------------------
console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "a#b#"));
console.log(backspaceCompare("a#c", "b"));
console.log(backspaceCompare("xywrrmp", "xywrrmu#p"));