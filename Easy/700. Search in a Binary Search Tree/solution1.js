/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function (root, val) {
    if (root === null) {
        return null;
    }

    if (val < root.val) {
        return searchBST(root.left, val);
    } else if (val > root.val) {
        return searchBST(root.right, val);
    } else {
        return root;
    }

    return searchBST(root, val);
};



// ----------------------------
// Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        /** @type {number} */
        this.val = (val === undefined ? 0 : val);
        /** @type {TreeNode} */
        this.left = (left === undefined ? null : left);
        /** @type {TreeNode} */
        this.right = (right === undefined ? null : right);
    }
}

/**
 * 建立測試用的 BST
 * @param {number[]} nums
 * @returns {TreeNode}
 */
const bstBuilder = function (nums) {
    /**
     * @param {TreeNode} node
     * @param {TreeNode} newNode
     * @return {void}
     */
    const insertNode = function (node, newNode) {
        if (newNode.val < node.val) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        }

        if (newNode.val > node.val) {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    const root = new TreeNode(nums[0]);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== null) {
            insertNode(root, new TreeNode(nums[i]));
        }
    }

    return root;
};

const bst = bstBuilder([4, 2, 7, 1, 3]);
console.log(searchBST(bst, 2));
console.log(searchBST(bst, 5));

const bst2 = bstBuilder([18, 2, 22, null, null, null, 63, null, 84, null, null]);
console.log(searchBST(bst2, 63));