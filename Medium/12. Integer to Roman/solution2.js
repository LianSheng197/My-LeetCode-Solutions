/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
    const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let result = "";
    for (let i = 0; i < romans.length; i++) {
        while (num >= values[i]) {
            result += romans[i];
            num -= values[i];
        }
    }

    return result;
};


// --------------------------
console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));