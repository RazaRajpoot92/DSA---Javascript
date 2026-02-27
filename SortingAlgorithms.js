// Bubble sort


// Iteration (outloop)=> n-1
// Swapping (inner loop) => n-1-i


let nums = [3,4,5,1,6]

//let n = nums.length;

// Leetcode problem 58. Length of Last Word
// Solution

let s = "luffy is still joyboy"
let s1 = s.trim()
let lastWordLength = 0;


for(let i =0; i< s1.length; i++){
    if(s1[i]!=" "){
        lastWordLength ++;
    }else{
        lastWordLength = 0
    }
}

//console.log(lastWordLength)


// Selection sort

function selectionSort(arr){

    for(let i=0; i<arr.length-1; i++){
        let min = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j
            }           
        }
        if(min!=i){
            let temp = arr[i]
            arr[i] = arr[min];
            arr[min] = temp;
        }
        
    }
    return arr;
}

let arr = [4,4,0,15,14]
let result = selectionSort(arr)
console.log(result)


function insertionSort(arr){
    
    let n = arr.length;

    for(let i=1; i<n; i++){
        let curr = i;
        pre = i-1;
        while(arr[pre]>arr[curr] && pre>=0){
            arr[pre] = arr[pre+1];
            pre--
        }
        arr[curr] = arr[pre+1];
    }
    return arr

}

console.log(insertionSort(arr))

let n = [1,3,5,7,12]
let m = [2,4,8,9,10,11,13]
let newArr = []
let length = n.length + m.length;
let np = 0;
let mp = 0;

for(let i = 0; i<length; i++){

    if(mp==m.length || np<n.length && n[np]<m[mp]){
        newArr[i] = n[np]
        np++;
        
    }else {
        newArr[i] = m[mp];
        mp++;
        
    }
   // console.log(i+1)
}

console.log(newArr)



// merge sort

var sortArray = function(nums) {

    if(nums.length == 1) return nums;
    let mid = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,mid));
    let right = sortArray(nums.slice(mid));
    return merge(left, right) // undefine
    
};

function merge(left, right){
    console.log('w')
    console.log(left, right)
    let result = [];
    let m = left.length + right.length;
    let i = 0;
    let j = 0;

    for(let k=0; k<m; k++){

        if( j>=right.length || (i<left.length && left[i]<right[j])){
            result[k] = left[i];
            i++
        }else{
            result[k]=right[j];
            j++
        }
    }
    return result
}

let arrr = [5,2,1]

console.log(sortArray(arrr))


// Quick sort algorithm

function findPivotIndex(arr,startIndex, endIndex){
    let pivot = arr[endIndex]
    let pos = startIndex - 1
    for(let i = startIndex; i<endIndex; i++){
        if(arr[i]<pivot){
            pos++
            [arr[i],arr[pos]] = [arr[pos], arr[i]]
            
        }
    }
    
    
    [arr[pos+1], arr[endIndex]] = [arr[endIndex], arr[pos+1]]
    
    return pos+1
}


function quickSort(arr, startIndex, endIndex){
    if(startIndex < endIndex){
        
        let pivotIndex = findPivotIndex(arr,startIndex,endIndex)
        
        quickSort(arr,startIndex, pivotIndex-1)
        quickSort(arr, pivotIndex+1, endIndex)
    }
    
    return arr
    
}



//let arr = [8,3,1,7,0,10,2]

console.log(quickSort(arr,0, arr.length - 1))


// Counting sort (unstable)


function countingSort(arr){
    let max = Math.max(...arr)
    let count = new Array(max+1).fill(0)
    for(let num of arr){
        count[num]++
        
    }

    let index = 0
    for(let i =0; i<count.length; i++){
        while(count[i]){
            arr[index] = i
            count[i]--
            index++
        }
    }
    
    return arr
}


//let arr = [0,5,5,2,3,4,2,1,6,7,9]

console.log(countingSort(arr))

function countingSortStable(arr){
    let max = Math.max(...arr)
    let count = new Array(max+1).fill(0)
    
    for(let x of arr){
        count[x]++
    }
    
    // let prefixSum = new Array(max+1).fill(0)
    // prefixSum[0] = count[0]
    
    for(let i = 1; i<count.length; i++){
        count[i] = count[i] + count[i-1]
    }
 
    let sortedArray = new Array(arr.length)
    
    for(let i = arr.length -1; i>=0; i--){
        let curr = arr[i]
        let x = count[curr]
        sortedArray[x-1] = curr
        count[curr]--
    }
    
    return sortedArray;
    
}


//let arr = [2,4,5,3,3,2,1,4,5,5,5,59,9,9,5]

console.log(countingSortStable(arr))