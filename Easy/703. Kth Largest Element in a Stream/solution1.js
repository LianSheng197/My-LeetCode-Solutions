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
        this.nums.push(val);
        this.nums.sort((a, b) => b - a);

        return this.nums[this.k - 1];
    }
}


// ---------------------------------
const obj = new KthLargest(3, [4, 5, 8, 2]);
console.log(obj.add(3));
console.log(obj.add(5));
console.log(obj.add(10));
console.log(obj.add(9));
console.log(obj.add(4));