/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = function (head, k) {
    // 先取得陣列值（直接保存各個節點）
    const values = [];
    while (head !== null) {
        values.push(head);
        head = head.next;
    }

    // 交換
    [values[k - 1].val, values[values.length - k].val] = [values[values.length - k].val, values[k - 1].val];

    return values[0];
};




// ------------------------
class ListNode {
    /**
     * @param {number} [val]
     * @param {ListNode} [next]
     */
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * 建立測試用的鏈結串列
 * @param {number[]} nums
 * @returns {ListNode}
 */
const linkedListBuilder = function (nums) {
    let headNode;

    for (let i = nums.length - 1; i >= 0; i--) {
        let currentNode = new ListNode(nums[i]);
        if (headNode === undefined) {
            headNode = currentNode;
        } else {
            currentNode.next = headNode;
            headNode = currentNode;
        }
    }

    return headNode;
};

console.log(swapNodes(linkedListBuilder([1, 2, 3, 4, 5]), 2));
console.log(swapNodes(linkedListBuilder([7, 9, 6, 6, 7, 8, 3, 9, 5]), 5));
