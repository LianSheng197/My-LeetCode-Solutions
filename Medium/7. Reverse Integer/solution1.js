/**
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
    let limit = 2 ** 31;
    let multiplier = 1;
    let s = x.toString();
    let result = "";

    if (x < 0) {
        multiplier = -1;
        s = s.substring(1);
    }

    for (let i = s.length - 1; i >= 0; i--) {
        result += s[i];
    }

    result *= multiplier;

    return (result >= -limit && result < limit) ? result : 0;
};



// ---------------------
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));