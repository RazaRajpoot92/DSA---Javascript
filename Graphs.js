/*
Graphs are data structures that represent relationship or connection between objects

*/



/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;

    let q = [node];
    let cloneNode = new Node(node.val)
    let visited = new Map()
    visited.set(node, cloneNode)

    while(q.length){
        let curr = q.shift()

        for(n of curr.neighbors){
            if(!visited.has(n)){
                q.push(n)
                visited.set(n, new Node(n.val))
            }

            let currClone = visited.get(curr)
            currClone.neighbors.push(visited.get(n))
        }
    }

    return cloneNode
};

// DFS

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;

    let stack = [node];
    let cloneNode = new Node(node.val);
    let visited = new Map();
    visited.set(node, cloneNode)

    while(stack.length){
        let curr = stack.pop()
        for(let n of curr.neighbors){

            if(!visited.has(n)){
                stack.push(n)
                visited.set(n, new Node(n.val))
            }

            let currClone = visited.get(curr)
            currClone.neighbors.push(visited.get(n))
        }
    }

    return cloneNode;
};
