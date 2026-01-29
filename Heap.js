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