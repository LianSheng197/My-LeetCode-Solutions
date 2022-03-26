/**
 * @param {string} s
 * @return {number}
 */
let myAtoi = function (s) {
    while (s.charAt(0) === " ") {
        s = s.substring(1);
    }

    const limit = 2 ** 31;
    let signed = false;
    let isFloat = false;
    let result = "";

    for (let i = 0; i < s.length; i++) {
        if (["+", "-"].indexOf(s[i]) != -1) {
            if (signed || i != 0) {
                break;
            }
            signed = true;
            result += s[i] + "0";
            continue;
        } else if (s[i] == ".") {
            if (isFloat) {
                break;
            }
            isFloat = true;
        } else if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(s[i]) == -1) {
            break;
        }

        result += s[i];
    }

    if (result >= limit) {
        result = limit - 1;
    }

    if (result < -limit) {
        result = -limit;
    }

    return result - 0;
};


// ------------------------
console.log(myAtoi("42             "));
console.log(myAtoi("         -42   "));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("   +37.1       "));
console.log(myAtoi("No number 123.4"));
console.log(myAtoi("+-37 it's fake "));
console.log(myAtoi("00000-42a1234"));