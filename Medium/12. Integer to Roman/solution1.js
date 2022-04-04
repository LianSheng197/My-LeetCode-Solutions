/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
    const map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let result = "";
    for (let [r, n] of Object.entries(map)) {
        while(num >= n) {
            result += r;
            num -= n;
        }
    }

    return result;
};


// --------------------------
console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));