/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    // 假設傳入的數字 x 都是對稱的
    // 根據對稱條件重建數字 y
    // 如果重建後的數字 y 等於傳入的數字 x 就表示 x 確實是對稱的

    let currentNumber = x;
    let y = 0;

    while(currentNumber > 0) {
        y = y * 10 + currentNumber % 10;
        currentNumber = Math.floor(currentNumber / 10);
    }

    return x === y;
};



// ---------------------------
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));