/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = function (head, k) {
    let leftNode; 
    let rightNode = head;
    let currentHead = head;
    let count = 0;

    while (currentHead !== null) {
        count++;

        if (count === k) {
            leftNode = currentHead;
        }

        if (count > k) {
            // 這個想法很妙
            // 不需要事先知道這個鏈結串列有多長
            // 因爲題目正好是設計對稱交換，所以從最開頭偏移 (全長-k) 次就能達到目的
            rightNode = rightNode.next;
        }

        currentHead = currentHead.next;
    }

    // 交換
    [leftNode.val, rightNode.val] = [rightNode.val, leftNode.val];

    return head;
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

// console.log(swapNodes(linkedListBuilder([1, 2, 3, 4, 5]), 2));
// console.log(swapNodes(linkedListBuilder([7, 9, 6, 6, 7, 8, 3, 9, 5]), 5));
console.log(swapNodes(linkedListBuilder([100, 90]), 2));