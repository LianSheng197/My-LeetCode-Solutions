/**
 * @param {number[]} tasks
 * @return {number}
 */
const minimumRounds = function (tasks) {
    const getMinimum = function (num) {
        let n = Math.floor(num / 3);
        let r = num - 3 * n;
        if (r != 0) {
            if (r === 1) {
                if (n > 0) {
                    n += 1;
                } else {
                    return -1;
                }
            } else {
                n += 1;
            }
        }

        return n;
    };

    const set = {};

    for (let i = 0; i < tasks.length; i++) {
        if (set[tasks[i]] === undefined) {
            set[tasks[i]] = 0;
        }

        set[tasks[i]]++;
    }

    let result = 0;
    for (let v of Object.values(set)) {
        const m = getMinimum(v);

        if (m !== -1) {
            result += m;
        } else {
            return -1;
        }
    }

    return result;
};




// ------------
console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]));
console.log(minimumRounds([2, 3, 3]));