/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = function (ops) {
    const result = [];

    for (let i = 0; i < ops.length; i++) {
        switch (ops[i]) {
            case "C":
                result.pop();
                break;
            case "D":
                result.push(result[result.length - 1] * 2);
                break;
            case "+":
                result.push(result[result.length - 2] + result[result.length - 1]);
                break;
            default:
                result.push(ops[i] - 0);
        }
    }

    return result.reduce((a, b) => a + b, 0);
};


// --------------------
console.log(calPoints(["5","2","C","D","+"]));
console.log(calPoints(["5","-2","4","C","D","9","+","+"]));
console.log(calPoints(["1"]));