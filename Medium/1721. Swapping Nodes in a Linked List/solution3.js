/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = function (head, k) {
    // 爲求目的不擇手段的嘗試做法：
    // 在每個節點另增加一個 prev 屬性，直接變成雙向鏈結串列XD
    // 想想還是不要好了，反正都要逆推，不如順便拆掉回來的路 prev
    if (head.next === null) {
        return head;
    }

    let count = 1;
    let leftNode, rightNode;

    head.prev = null;
    while (head.next !== null) {
        if (k - count === 0) {
            leftNode = head;
        }

        head.next.prev = head;
        head = head.next;

        count++;
    }

    if (leftNode === undefined) {
        leftNode = head;
    }

    // 反推，找到目標節點
    count = 1;
    while (head.prev !== null) {
        if (k - count === 0) {
            rightNode = head;
        }

        head = head.prev;
        delete head.next.prev;

        count++;
    }

    if (rightNode === undefined) {
        rightNode = head;
    }

    delete head.prev;

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