/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @param {boolean} carry
     * @return {ListNode}
     */
    function realAddTwoNumbers(l1, l2, carry) {
        // 計算目前總和與進位與否
        let value = l1.val + l2.val + carry;
        if(value >= 10) {
            carry = true;
            value -= 10;
        } else {
            carry = false;
        }

        // 目前節點，預設 next = null
        let currentNode = new ListNode(value);

        // 若兩個鏈結串列均沒有下一個節點，且目前沒有進位，則回傳目前節點
        if (l1.next === null && l2.next === null && carry === false) {
            return currentNode;
        }  
        
        if(l1.next === null) {
            l1.next = new ListNode(0);
        }

        if(l2.next === null) {
            l2.next = new ListNode(0);
        }                    
        
        currentNode.next = realAddTwoNumbers(l1.next, l2.next, carry);        
        return currentNode;
    }

    return realAddTwoNumbers(l1, l2, false);
};



// ----------------------------
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

(() => {
    let a = new ListNode(3);
    let b = new ListNode(4, a);
    let l1 = new ListNode(2, b);

    let c = new ListNode(4);
    let d = new ListNode(6, c);
    let l2 = new ListNode(5, d);

    console.log(l1);
    console.log(l2);
    console.log(addTwoNumbers(l1, l2));
})();