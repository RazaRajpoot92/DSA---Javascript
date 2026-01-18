// PreOrderTraversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {

    let result = []

    function preTraversal(curr){
        if(!curr) return;
        result.push(curr.val)
        preTraversal(curr.left)
        preTraversal(curr.right)
    }    
    preTraversal(root)

    return result
};


// Iterative approach

var preorderTraversal = function(root) {
    if(!root) return []

    let stack = [root]
    let result = []

    while(stack.length){
        let curr = stack.pop()
        
        result.push(curr.val)

        curr.right && stack.push(curr.right)
        curr.left && stack.push(curr.left)
    }

    return result;
};
