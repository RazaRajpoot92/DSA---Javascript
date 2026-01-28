// Min heap



class MinHeap{
    
    constructor(){
        this.heap = []
    }
    
    getLeftChildIndex(i){
        return (2 * i) + 1
    }
    
    getRightChildIndex(i){
        return (2 * i) + 2
    }
    
    getParentIndex(i){
        return Math.floor((i-1)/2)
    }
    
    insert(ele){
        this.heap.push(ele);
        let currEleIndex = this.heap.length - 1;
        this.heapifyUp(currEleIndex)
       
    }
    
    heapifyUp(i){
        
        while(i>0){
             let parentIndex = this.getParentIndex(i)
            if(this.heap[i] < this.heap[parentIndex]){
                [this.heap[i], this.heap[parentIndex]] = 
                [this.heap[parentIndex], this.heap[i]]
                i = parentIndex;
            }else{
                break;
            }
        }
        
    }
}


const heap = new MinHeap()
heap.insert(2)
heap.insert(1)
heap.insert(3)
heap.insert(5)
heap.insert(0)
console.log(heap.heap)