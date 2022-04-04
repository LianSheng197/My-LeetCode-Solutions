/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let result = 0;
    for(let i=0; i<romans.length; i++) {
        while(s.startsWith(romans[i])) {
            result += values[i];
            s = s.substring(romans[i].length);
        }
    }

    return result;
};


// -------------------------
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXIV"));