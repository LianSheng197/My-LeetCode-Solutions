/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
    let aNode = headA;
    let bNode = headB;

    while (aNode !== bNode) {
        aNode = aNode === null ? headB : aNode.next;
        bNode = bNode === null ? headA : bNode.next;
    }

    return aNode;
};


// -------------------------------
class ListNode {
    /**
     * @param {number} val
     * @param {ListNode} [next]
     */
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * 建立鏈結串列
 * @param {number[]} nums 節點值的陣列，若有尾隨節點則不能包含交叉與之後的節點
 * @param {ListNode} [followNode] 在尾部跟隨的節點，預設 null
 * @param {number} [intersectVal] 決定交叉節點的值，若不爲 0 則回傳交叉節點
 * @returns {{node: ListNode, store: ListNode}}
 */
function listNodesBuilder(nums, followNode = null, intersectVal = 0) {
    let headNode;
    let storeNode = null;

    for (let i = nums.length - 1; i >= 0; i--) {
        const currentNode = new ListNode(nums[i]);

        if (headNode === undefined) {
            headNode = currentNode;

            if (followNode !== null) {
                headNode.next = followNode;
            }
        } else {
            currentNode.next = headNode;
            headNode = currentNode;
        }

        if (nums[i] === intersectVal) {
            storeNode = currentNode;
        }
    }

    return {
        node: headNode,
        store: storeNode
    };
}

const {
    node: linkedListA,
    store: linkedListAStore
} = listNodesBuilder([4, 1, 8, 4, 5], null, 8);

const {
    node: linkedListB
} = listNodesBuilder([5, 6, 1], linkedListAStore);

console.log(linkedListA);
console.log(linkedListB);
console.log(getIntersectionNode(linkedListA, linkedListB));