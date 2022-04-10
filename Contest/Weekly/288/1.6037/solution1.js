/**
 * @param {number} num
 * @return {number}
 */
const largestInteger = function (num) {
    const s = num.toString();
    const odd = [];
    const even = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] % 2 === 0) {
            even.push(s[i]);
        } else {
            odd.push(s[i]);
        }
    }

    odd.sort((a, b) => b - a);
    even.sort((a, b) => b - a);

    let result = "";

    console.log(odd, even);
    // return result - 0;
};


// --------------
console.log(largestInteger(1234));
console.log(largestInteger(65875));
console.log(largestInteger(247));