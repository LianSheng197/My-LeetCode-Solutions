/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = function (logs) {
    let result = 0;

    for(let i = 0; i<logs.length; i++) {
        if(logs[i] === "../") {
            result -= result !== 0;
        } else if(logs[i] === "./") {
            continue;
        } else {
            result++;
        }
    }

    return result;
};


// ------------------------
console.log(minOperations(["d1/","d2/","../","d21/","./"]));
console.log(minOperations(["d1/","d2/","./","d3/","../","d31/"]));
console.log(minOperations(["d1/","../","../","../"]));