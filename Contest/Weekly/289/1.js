/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const digitSum = function (s, k) {
    if(s.length <= k) {
        return s;
    }

    let result = "";

    for (let i = 0; i < s.length; i += k) {
        let count = 0;
        let temp = 0;

        while (count < k) {
            if (s[i + count] === undefined) {
                break;
            }

            temp += s[i + count] - 0;
            count++;
        }

        result += temp;
    }



    if (result.length > k) {
        return digitSum(result, k);
    }

    return result;
};




// ----------------------
console.log(digitSum("11111222223", 3));
console.log(digitSum("00000000", 3));
console.log(digitSum("233", 3));
console.log(digitSum("01234567890", 100));

