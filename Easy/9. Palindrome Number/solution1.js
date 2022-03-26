/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
    if (x < 0 || (x % 10 == 0 && x >= 10)) {
        return false;
    }

    /**
     * 取得數字 number 的 10^index 位是什麼數字 (index >= 0)  
     * E.g. 數字 13579 的第 2 位數是 5
     * @param {number} number
     * @param {number} index
     * @returns {number}
     */
    function getDigit(number, index) {
        let result = number % 10 ** (index + 1);
        result = Math.floor(result / 10 ** index);

        return result;
    }

    // 取得數字位數
    let digits = Math.ceil(Math.log(x) / Math.log(10));

    if (digits % 2 == 1) {
        // 12321 模式
        let centerPower = (digits - 1) / 2;

        for (let shift = 1; centerPower + shift < digits; shift++) {
            if (getDigit(x, centerPower - shift) != getDigit(x, centerPower + shift)) {
                return false;
            }
        }
    } else {
        // 123321 模式
        let leftCenterPower = digits / 2;

        for (let shift = 0; leftCenterPower + shift < digits; shift++) {
            if (getDigit(x, leftCenterPower - shift - 1) != getDigit(x, leftCenterPower + shift)) {
                return false;
            }
        }
    }

    return true;
};



// ---------------------------
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));