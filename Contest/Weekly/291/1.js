/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
const removeDigit = function (number, digit) {
    let result = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < number.length; i++) {
        if (number[i] == digit) {
            const num = number.substring(0, i) + number.substring(i + 1, number.length);

            if (num > result) {
                result = num;
            }
        }
    }

    return result;
};


// ----------------------
console.log(removeDigit("123", "3"));
console.log(removeDigit("1231", "1"));
console.log(removeDigit("551", "5"));