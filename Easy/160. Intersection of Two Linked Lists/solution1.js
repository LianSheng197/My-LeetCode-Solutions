/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
    let aNode = headA;
    let bNode = headB;
    let storeNode;

    // 相同長度部分先略過，迭代直到有一條到達盡頭。
    while (aNode && bNode) {
        aNode = aNode.next;
        bNode = bNode.next;
    }

    // 計算長度差異
    let diff = 0;
    let longerListNode = aNode || bNode;

    while (longerListNode) {
        diff++;
        longerListNode = longerListNode.next;
    }

    // 將暫存節點設爲較長那條的起始節點
    if (aNode !== null) {
        storeNode = headA;
    } else {
        storeNode = headB;
    }

    // 根據長度差異偏移暫存的節點
    while (diff > 0) {
        storeNode = storeNode.next;
        diff--;
    }

    // 將長的以暫存節點當開頭；短的以它原本的起始節點當開頭
    // 這能確保之後兩者的長度是一樣的
    if (aNode === null) {
        aNode = headA;
        bNode = storeNode;
    } else {
        aNode = storeNode;
        bNode = headB;
    }

    // 最後再同時偏移遍歷即可
    while (aNode && bNode) {
        if(aNode === bNode) {
            return aNode;
        }

        aNode = aNode.next;
        bNode = bNode.next;
    }

    return null;
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