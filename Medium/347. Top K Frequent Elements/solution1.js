/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
    class KeyValue {
        /**
         * @param {number} num
         */
        constructor(num) {
            // 哪個數字
            this.num = num;
            // 累積次數
            this.times = 0;
            // 目前在 result 的哪個 index
            // 若不在 result 裡面則設爲 -1
            this.pos = -1;
        }
    }

    /**
     * 將 result 的兩個元素互換，連同物件內部值
     * @param {KeyValue[]} array
     * @param {number} i1
     * @param {number} i2
     */
    const swapResult = function (array, i1, i2) {
        [array[i1], array[i2]] = [array[i2], array[i1]];
        [array[i1].pos, array[i2].pos] = [array[i2].pos, array[i1].pos];
    };

    /** @type {Object.<string, KeyValue>} */
    const store = {};

    /** @type {KeyValue[]} */
    const result = [];

    // 避免傳入參數 k 混淆，將原本習慣的 ijk 流水號改成 xyz
    for (let x = 0; x < nums.length; x++) {
        if (store[nums[x]] === undefined) {
            store[nums[x]] = new KeyValue(nums[x]);
        }

        // A. 計算次數
        store[nums[x]].times++;

        // B. 並同時判斷是否在嚴格遞減陣列 result 的前 k 名 
        if (result.length < k && store[nums[x]].pos === -1) {
            // 如果尚有空位且尚未在前 K 名，直接追加
            store[nums[x]].pos = result.length;
            result.push(store[nums[x]]);
        } else {
            if (store[nums[x]].pos === -1) {
                // 若原本此物件不在前 k 名，開始逆序檢查是否需要交換

                // 不能直接找最後一個，因爲這裡只能確保前 K 名，沒辦法確保第一名一定在第一個位子
                // 檢查最小值，則最小值對應的位置易主
                let minTimes = Infinity;
                let minIndex;
                for (let y = 0; y < k; y++) {
                    if(result[y].times < minTimes) {
                        minTimes = result[y].times;
                        minIndex = result[y].pos;
                    }
                }

                if (result[minIndex].times < store[nums[x]].times) {
                    result[minIndex].pos = -1;
                    result[minIndex] = store[nums[x]];
                    result[minIndex].pos = minIndex;
                }

                // 再逆序逐項檢查是否要交換排行
                for (let y = k - 1; y > 0; y--) {
                    if (result[y].times > result[y - 1].times) {
                        swapResult(result, y, y - 1);
                    } else {
                        break;
                    }
                }
            }
        }
    }

    return result.map(e => e.num);
};



// ---------------------------
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequent([1], 1));
// console.log(topKFrequent([-1, 1, 4, -4, 3, 5, 4, -2, 3, -1], 3));
console.log(topKFrequent([6, 0, 1, 4, 9, 7, -3, 1, -4, -8, 4, -7, -3, 3, 2, -3, 9, 5, -4, 0], 6));