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


// Bellman Ford algorithm

function bellmanFord(edges, V, src) { 
    let dist = new Array(V).fill(Infinity);
    dist[src] = 0

    for (let i = 0; i < V - 1; i++) { 
        let updated = false;
        for (let [u, v, w] of edges) { 

            if ( dist[u] != Infinity && dist[u] + w < dist[v]) { 
                dist[v] = dist[u] + w;
                updated = true;
            }
        }

        if (!updated) break;
    }

    for (let [u, v, w] of edges) { 
        if (dist[u] != Infinity && dist[u] + w < dist[v]) { 
            console.log("Negative cycle detected!")
            return null
        }
    }

    return dist;
}



// const edges = [
//     [0, 1, 6],
//     [0, 2, 5],
//     [0, 3, 5],
//     [1, 4, -1],
//     [2, 1, -2],
//     [2, 4, 1],
//     [3, 2, -2],
//     [3, 5, -1],
//     [4, 6, 3],
//     [5, 6, 3]
// ];

const edges = [
    [0, 1, 4],
    [1, 2, -1],
    [2, 3, 2],
    [3, 1, 0]
]

let V = 4;

console.log(bellmanFord(edges, V, 0))

// Floyd Warshall Algorithm for finding all pairs shortest distance

function floydWarshall(V, edges){
    let dist = Array.from({length:V}, (_,i)=>{
        return Array.from({length:V}, (_,j)=>{
            if(i==j){
                return 0
            }else{
                return Infinity;
            }
        })
    })
    
    for(let [i,j,w] of edges){
        dist[i][j] = w
    }
    
    for(let k = 0; k<V; k++){
        for(let i = 0; i<V; i++){
            for(let j = 0; j<V; j++){
                dist[i][j] = Math.min(dist[i][k] + dist[k][j], dist[i][j])
            }
        }
    }
    
   // console.log(dist)
    
    return dist
    
}


// const edges = [
//     [0, 1, 2],
//     [1, 0, 7],
//     [1, 2, 3],
//     [2, 1, 8],
//     [2, 3, 2],
//     [3, 0, 1],
//     [3, 1, 5]
// ];

console.log(floydWarshall(4, edges));


// prim's MST algorithm

function primMST(n, graph){
    
    let visited = new Array(n).fill(false);
    let pq = new MinHeap();
    pq.insert([0,0]);
    
    let mstCost = 0;
    
    let nodesVisited = 0;

    while (nodesVisited < n) {
        let [node, weight] = pq.extract();
    
        if (visited[node]) continue;
    
        visited[node] = true;
        nodesVisited++;
        mstCost += weight;
    
        for (let [next, w] of graph[node]) {
            if (!visited[next]) pq.insert([next, w]);
        }
    }
    
    return mstCost;
    
}


// const graph = [
//     [[1,2],[3,1], [4,4]],
//     [[0,2],[3,3], [2,3], [5,7]],
//     [[1,3],[3,5],[5,8]],
//     [[0,1], [4,9], [2,5], [1,3]],
//     [[0,4], [3,9]],
//     [[1,7], [2,8]]
// ];

console.log(primMST(6, graph));

// const graph = [
//     [[1, 4], [2, 2], [3, 5]],
//     [[0, 4], [3, 1]],
//     [[0, 2], [3, 3]],
//     [[1, 1], [2, 3]]
// ];

// console.log(primMST(4, graph));


// Kruskal's algorithm to find MST cost

class UnionFind{
    constructor(n){
        this.parent = new Array(n).fill(0).map((_,i) => i);
        this.rank = new Array(n).fill(0);
    }
    
    find(x){
        if(x !== this.parent[x]){
            this.parent[x] = this.find(this.parent[x])
        }
        return this.parent[x]
    }
    
    union(x,y){
        let rootX = this.find(x);
        let rootY = this.find(y);
        
        if(rootX == rootY) return false;
        
        if(this.rank[rootX] > this.rank[rootY]){
            this.parent[rootY] = rootX
        }else if(this.rank[rootY] > this.rank[rootX]){
            this.parent[rootX] = rootY;
        }else{
            this.parent[rootY] = rootX;
            this.rank[rootX]++
        }
        
        return true;
        
    }
    
}

function Kruskal(n, edges){
    
    edges.sort((a,b)=> a[2]-b[2])
    let uf = new UnionFind(n)
    let mstCost = 0
    let edgeUsed = 0
    for(let [x,y,w] of edges){
        if(uf.union(x,y)){
            mstCost += w;
            edgeUsed++
            if(edgeUsed == n-1) break;
        }
    }
    
    return mstCost;
    
}


// const edges = [
//     [0, 1, 4], [0, 2, 4], [1, 2, 2],
//     [2, 3, 3], [2, 5, 2], [2, 4, 4],
//     [3, 4, 3], [5, 4, 3]
// ];

console.log(Kruskal(6, edges));

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {

    if (connections.length < n - 1) return -1;
    let graph = Array.from({ length: n }, () => []);
    for (let [from, to] of connections) {
        graph[from].push(to)
        graph[to].push(from)
    }

    let visited = new Array(n).fill(false)
    let noOfConnections = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            noOfConnections++
            bfs(i, visited, graph)
        }
    }

    return noOfConnections - 1

};

function bfs(src, visited, graph) {

    let queue = [src]
    visited[src] = true

    while (queue.length) {
        let curr = queue.shift()
        for (let neighbor of graph[curr]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor)
            }
        }
    }

}


//

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {

    let graph = Array.from({ length: n }, () => [])

    for (let [from, to, price] of flights) {
        graph[from].push([to, price])
    }


    let minCost = new Array(n).fill(Infinity);
    minCost[src] = 0

    let q = [[src, 0, 0]]

    while (q.length) {
        let [curr, cost, stops] = q.shift();
        if (stops > k) continue;

        for (let [neighbor, neighborPrice] of graph[curr]) {
            let newPrice = cost + neighborPrice

            if (newPrice < minCost[neighbor]) {
                minCost[neighbor] = newPrice
                q.push([neighbor, newPrice, stops + 1])
            }
        }
    }

    return minCost[dst] === Infinity ? -1 : minCost[dst]
};