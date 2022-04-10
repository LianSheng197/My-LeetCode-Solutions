/**
 * @param {string} expression
 * @return {string}
 */
const minimizeResult = function (expression) {
    const original = expression.split("+");
    let min = (original[0] - 0) + (original[1] - 0);
    let result = `(${expression})`;

    for (let i = 0; i < original[0].length; i++) {
        for (let j = 1; j <= original[1].length; j++) {
            const left = original[0].slice(0, i);
            const mid1 = original[0].slice(i, original[0].length) - 0;
            const mid2 = original[1].slice(0, j) - 0;
            const right = original[1].slice(j, original[1].length);

            let temp;
            if (left.length > 0) {
                if (right.length > 0) {
                    temp = (left - 0) * (right - 0) * (mid1 + mid2);
                    if (temp < min) {
                        min = temp;
                        result = `${left}(${mid1}+${mid2})${right}`;
                    }
                } else {
                    temp = (left - 0) * (mid1 + mid2);
                    if (temp < min) {
                        min = temp;
                        result = `${left}(${mid1}+${mid2})`;
                    }
                }
            } else {
                if (right.length > 0) {
                    temp = (right - 0) * (mid1 + mid2);
                    if (temp < min) {
                        min = temp;
                        result = `(${mid1}+${mid2})${right}`;
                    }
                } else {
                    temp = (mid1 + mid2);
                    if (temp < min) {
                        min = temp;
                        result = `(${mid1}+${mid2})`;
                    }
                }
            }
        }
    }

    return result;
};


// ----------------
console.log(minimizeResult("247+38"));
console.log(minimizeResult("12+34"));
console.log(minimizeResult("999+999"));