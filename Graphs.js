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
//

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if(n == 1) return true
    let map = {};

    for(let [x,y] of edges){
        if(!map[x]) map[x] = [];
        if(!map[y]) map[y] = [];
        map[x].push(y);
        map[y].push(x);
    }

    let q = [source];
    let visited = new Set();
    visited.add(source)

    while(q.length){
        let curr = q.shift()

        if(curr === destination) return true

        for(let neighbor of map[curr]){
            if(!visited.has(neighbor)){
                q.push(neighbor);
                visited.add(neighbor)
            }
        }
    }

    return false;
};


 // Recursive DFS
var validPath = function(n, edges, source, destination) {
    if(n == 1) return true
    let map = {};

    for(let [x,y] of edges){
        if(!map[x]) map[x] = [];
        if(!map[y]) map[y] = [];
        map[x].push(y);
        map[y].push(x);
    }

    let visited = new Set();

    function DFS(curr){
        visited.add(curr);
        if(curr == destination) return true;

        for(let neighbor of map[curr]){
            if(!visited.has(neighbor)){

               if(DFS(neighbor)) return true;
                
            }
        }

        return false;

    }

    return DFS(source)
    
};


//

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {

    let graph = {};

    for(let [from, to] of tickets){
        if(!graph[from]) graph[from] = [];
        graph[from].push(to);
    }

    for(let path in graph){
        graph[path].sort();
    }

    let path = []; 

    function dfs(curr){

        let destinations = graph[curr] || []

        while(destinations.length){
            let neighbor = graph[curr].shift();
            dfs(neighbor)
        }

        path.unshift(curr)
    }

    dfs("JFK");

    return path
    
};