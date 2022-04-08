class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.nums = nums.slice().sort((a, b) => b - a);
        this.k = k;
    }

    /** 
     * @param {number} val
     * @return {number}
     */
    add(val) {
        const index = this.searchIndex(val);
        this.nums.splice(index, 0, val);

        return this.nums[this.k - 1];
    }

    /**
     * 取得 index，確保插入陣列後依然保持遞減
     * @param {number} target
     * @returns {number}
     */
    searchIndex(target) {
        for (let i = 0; i < this.nums.length; i++) {
            if (this.nums[i] <= target) {
                return i;
            }
        }

        if(this.nums.length <= 1) {
            return this.nums.length;
        } else {
            return this.nums.length - 1;
        }
    }
}


// ---------------------------------
const obj = new KthLargest(3, [4, 5, 8, 2]);
console.log(obj.add(3));
console.log(obj.add(5));
console.log(obj.add(10));
console.log(obj.add(9));
console.log(obj.add(4));

console.log("================");

const obj2 = new KthLargest(1, [-2]);
console.log(obj2.add(-3));
console.log(obj2.add(0));
console.log(obj2.add(2));
console.log(obj2.add(-1));
console.log(obj2.add(4));