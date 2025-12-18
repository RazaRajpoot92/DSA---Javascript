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