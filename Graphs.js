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

//


function topologicalSortKahn(n, graph) {
  // your solution here
  let indegree = new Array(n).fill(0)

  for (let i = 0; i < n; i++) { 
    for (let node of graph[i]) { 
      indegree[node]++
    }
  }

  let q = [];
  let ans = [];

  for (let i = 0; i < indegree.length; i++) { 
    if (indegree[i] == 0) { 
      q.push(i)
    }
  }

  ///

  while (q.length) { 
    let curr = q.shift();
    ans.push(curr)

    for (let neighbor of graph[curr]) {
      indegree[neighbor]--;
      if (indegree[neighbor] == 0) {
        q.push(neighbor);
      }
    }
  }
  console.log(ans)
  if (ans.length !== n) return "Cycle detected — Topological Sort not possible";
return ans
}

module.exports = { topologicalSortKahn };


// shortest path distantance in unweighted graph - BFS

// function shortestDistance(graph, src) {
//   // your solution here
//   let n = graph.length;
//   let distArr = new Array(n).fill(Infinity);
//   distArr[src] = 0;
//   let q = [src];
  

//   while (q.length) {
//     let curr = q.shift();

//     for (let neighbor of graph[curr]) {
//       if (distArr[neighbor] === Infinity) { 
//         distArr[neighbor] = distArr[curr] + 1;
//         q.push(neighbor);
//       }
//     }
//   }

//   return distArr;
// }

// module.exports = { shortestDistance };


// let graph = [[1,2], [3], [4],[5],[3],[]]
// let src = 0;



// Dijistra's shortest distance algorithm MinHeap (pq) + Greedy


class MinHeap {
    constructor() {
        this.heap = [];
    }

    parent(i) { return Math.floor((i - 1) / 2); }
    left(i) { return 2 * i + 1; }
    right(i) { return 2 * i + 2; }

    size() {
        return this.heap.length;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(pair) {
        this.heap.push(pair);
        this.heapifyUp();
    }

    heapifyUp() {
        let i = this.heap.length - 1;

        while (
            i > 0 &&
            this.heap[i][0] < this.heap[this.parent(i)][0]
        ) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let i = 0;

        while (true) {
            let smallest = i;
            let left = this.left(i);
            let right = this.right(i);

            if (
                left < this.heap.length &&
                this.heap[left][0] < this.heap[smallest][0]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right][0] < this.heap[smallest][0]
            ) {
                smallest = right;
            }

            if (smallest !== i) {
                this.swap(i, smallest);
                i = smallest;
            } else {
                break;
            }
        }
    }
}


function dijistra(graph, src) { 
    let n = graph.length;
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    let pq = new MinHeap();
    pq.push([src, dist[src]]);

    while (pq.size()) { 
        let [currNode, currWeight] = pq.pop();

        if (dist[currNode] < currWeight) continue;

        for (let [neighbor, weight] of graph[currNode]) { 
            let newDist = dist[currNode] + weight;

            if (newDist < dist[neighbor]) { 
                dist[neighbor] = newDist;
                pq.push([neighbor, newDist])
            }
        }

    }

    return dist;

}


const graph = [
    [[1, 2], [2, 4]],
    [[3, 7], [2, 1]],
    [[4, 3], [5, 1]],
    [[6, 1]],
    [[3, 2], [6, 5]],
    [[3, 3], [6, 8]],
    []
];
console.log(dijistra(graph, 0));


//
// class MinHeap{
//     constructor(){
//         this.heap = [];
//     }
    
//     getLeftChild(i){
//         return ((2 * i) + 1)
//     }
    
//     getRightChild(i){
//         return ((2 * i) + 2)
//     }
    
//     getParentIndex(i){
//         return Math.floor((i-1)/2);
//     }
    
//     insert(val){
        
//         this.heap.push(val);
//         let lastIndex = this.heap.length - 1;
//         this.heapifyUp(lastIndex);
//     }
    
//     heapifyUp(i){
//         while(i>0){
//             let parentIndex = this.getParentIndex(i)
            
//             if(this.heap[i][1]<this.heap[parentIndex][1]){
//                 [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]];
                
//                 i = parentIndex;
//             }else{
//                 break;
//             }
//         }
//     }
    
//     extract() {

//         if (this.heap.length == 0) return null;
//         if (this.heap.length == 1) return this.heap.pop();
        
//         let min = this.heap[0]
//         this.heap[0] = this.heap[this.heap.length - 1]
//         this.heap.pop()
        
//         this.heapifyDown(0)
        
//         return min
//     }
    
//     heapifyDown(i){
//         let left = this.getLeftChild(i)
//         let right = this.getRightChild(i)
//         let n = this.heap.length
//         let smallest = i
//        // console.log("work")
//         if(left < n && this.heap[smallest][1] > this.heap[left][1]){
            
//             smallest = left
//         }
        
//         if(right < n && this.heap[smallest][1] > this.heap[right][1]){
            
//             smallest = right
//         }
        
//         if(smallest != i){
//             [this.heap[i], this.heap[smallest]] = [this.heap[smallest],this.heap[i]]
            
//             this.heapifyDown(smallest)
//         }
//     }

//     size() { return this.heap.length}
    
// }

// function dijistra(graph, src) { 
//     let n = graph.length;
//     let dist = new Array(n).fill(Infinity);

//     dist[src] = 0

//     let pq = new MinHeap();

//     pq.insert([src, 0]);

//     while (pq.size()) { 
//         let [node, nodeWeight] = pq.extract();

//         if (nodeWeight > dist[node]) continue;

//         for (let [neighbor, nWeight] of graph[node]) { 
//             let newWeight = nWeight + dist[node];
//             if (newWeight < dist[neighbor]) { 
//                 dist[neighbor] = newWeight;
//                 pq.insert([neighbor, newWeight])
//             }
//         }
//     }

//     return dist;

// }


// const graph = [
//     [[1, 2], [2, 4]],
//     [[3, 7], [2, 1]],
//     [[4, 3], [5, 1]],
//     [[6, 1]],
//     [[3, 2], [6, 5]],
//     [[3, 3], [6, 8]],
//     []
// ];

// console.log(dijistra(graph, 0));
