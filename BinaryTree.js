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
// Inorder traversal


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

 // Iterative approach
var inorderTraversal = function(root) {
    let stack = []
    let result = []
    let curr = root

    while(curr || stack.length){
        while(curr){
            stack.push(curr)
            curr = curr.left;
        }
        curr = stack.pop()
        result.push(curr.val)
        curr = curr.right
    }

    return result;
};


// Recursive Approach

// var inorderTraversal = function(root) {
//     let result = []

//     function traversal(curr){
//         if(!curr) return
//         traversal(curr.left)
//         result.push(curr.val)
//         traversal(curr.right)
//     }

//     traversal(root)

//     return result
// };




 // Iterative approach using one stack
var postorderTraversal = function(root) {
    let stack = []
    let result = []
    let curr = root
    let lastVisited = null;

    while(curr || stack.length){

        while(curr){
            stack.push(curr)
            curr = curr.left;
        }

        let peak = stack[stack.length-1]

        if(peak.right && peak.right != lastVisited){
            curr = peak.right
        }else{
            result.push(peak.val);
            lastVisited = stack.pop()
        }
    }

    return result;
    
};

// Level order traversal


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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];

    let q = [root]
    let result = []

    while(q.length){
        let levelRes = []
        let level = q.length;

        for(let i = 0; i<level; i++){
            let curr = q.shift()
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
            levelRes.push(curr.val)
        }

        result.push(levelRes)
    }

    return result;
};
