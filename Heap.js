// Min heap



// class MinHeap{
    
//     constructor(){
//         this.heap = []
//     }
    
//     getLeftChildIndex(i){
//         return (2 * i) + 1
//     }
    
//     getRightChildIndex(i){
//         return (2 * i) + 2
//     }
    
//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }
    
//     insert(ele){
//         this.heap.push(ele);
//         let currEleIndex = this.heap.length - 1;
//         this.heapifyUp(currEleIndex)
       
//     }
    
//     heapifyUp(i){
        
//         while(i>0){
//              let parentIndex = this.getParentIndex(i)
//             if(this.heap[i] < this.heap[parentIndex]){
//                 [this.heap[i], this.heap[parentIndex]] = 
//                 [this.heap[parentIndex], this.heap[i]]
//                 i = parentIndex;
//             }else{
//                 break;
//             }
//         }
        
//     }
// }


// const heap = new MinHeap()
// heap.insert(2)
// heap.insert(1)
// heap.insert(3)
// heap.insert(5)
// heap.insert(0)
// console.log(heap.heap)

// MaxHeap

function MaxHeap(){
    this.heap = []
}

MaxHeap.prototype.getLeftChildIndex = function(i){
    return (2 * i) + 1
}
MaxHeap.prototype.getRightChildIndex = function(i){
    return (2 * i) + 2
}

MaxHeap.prototype.getParentIndex = function(i){
    return Math.floor((i-1)/2)
}

MaxHeap.prototype.insert = function(ele){
    this.heap.push(ele)
    let currEleIndex = this.heap.length - 1
    this.heapifyUp(currEleIndex)
}

MaxHeap.prototype.heapifyUp = function(i){
    while(i>0){
        
        let parentIndex = this.getParentIndex(i)
        
        if(this.heap[parentIndex]<this.heap[i]){
            [this.heap[i], this.heap[parentIndex] ] = 
            [this.heap[parentIndex], this.heap[i]]
            
            i = parentIndex
        }else{
            break;
        }
    }
    
}

const heap = new MaxHeap()

heap.insert(1)
heap.insert(10)
heap.insert(11)

console.log(heap.heap)

//


let arr = [2,3,4,5,1,8]


function heapSort(arr){
    let n = arr.length
    // create Maxheap of array
    for(let i = Math.floor(n/2) - 1; i>=0; i--){
        heapifyDown(arr, i, n)
    }
    
    console.log(arr)
    
    for(let i = n-1; i>0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapifyDown(arr, 0, i)
    }
    
    return arr;
}

function heapifyDown(arr,i,n){
    
    let left = (2 * i) + 1;
    let right = (2 * i) + 2;
    let max = i;
    
    if(left<n && arr[left]>arr[max]){
        max = left
    }
    if(right<n && arr[right]>arr[max]){
        max = right
    }
    
    if(max != i){
        [ arr[i], arr[max] ] = [ arr[max], arr[i] ] 
        heapifyDown(arr, max, n)
    }
    
}


const ans = heapSort(arr)

console.log(ans)


//

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    // I need to push first colomn of matrix in heap (min priority queue)
    let heap = new MinPriorityQueue(x=>x.val)
    let n = matrix[0].length

    for(let i =0; i< Math.min(n,k); i++){
        let item  = {
            val:matrix[i][0],
            row:i,
            col:0
        }

        heap.enqueue(item)
    }

    // I have to push item from heap for k-1 time

    for(let i =0; i<k-1; i++){
        let {val, row, col} = heap.dequeue()

        if(col+1 < n){
            let newItem = {val:matrix[row][col+1], row:row, col:col+1 }
            heap.enqueue(newItem)
        }
    }

    return heap.dequeue().val

};



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
    
//     extract(){
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
    
// }

// const heap = new MinHeap();

// heap.insert([3,3])
// heap.insert([1,1])
// heap.insert([2,2])
// heap.insert([0,0])

// console.log(heap.extract())
// console.log(heap.extract())

// console.log(heap.heap)


