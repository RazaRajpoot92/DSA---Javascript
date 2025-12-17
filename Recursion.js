/*

Recursion => funtion calls it self to solve smaller part
of problem.

Parts of Recursion

1) Base case: Stop condition(where recursion stop)
2) recursive case: part of function need to be recursive

*/


// print n to 1 through recursion

function print(n){
    if(n<1) return;
  //  console.log(n);
    n = n-1;
    print(n)
}

// sum of all n numbers 

function sumOfn(n){
    if(n===0) return 0;
    return n + sumOfn(n-1)
}

//console.log(sumOfn(15))

// find the n is power of 2

function powerOfTwo(n){
   // console.log(n)
    if(n==1) {
        return true;
    }

    if(n<1) return false;

    
   return powerOfTwo(n/2)
}
let n = 4
//console.log(powerOfTwo(n))


// sum of all element in array

let arr = [2,3,4,7]

function sum(n){
    if(n===0) return arr[n];

    return arr[n] + sum(n-1);
}

//console.log(sum(arr.length-1))



// sum of all odd numbers in array

function sumOdd(n){
    if(arr[n]%2!=0){
        if(n===0) return arr[n];

        return arr[n] + sumOdd(n-1)
    }else{
        if(n===0) return arr[n];
        return sumOdd(n-1)
    }
}

//console.log(sumOdd(arr.length-1))


//let f = 3

function factorial(f){
    if(f==0)return 1;
    
    return f * factorial(f-1)
}

//console.log(factorial(f))

// Fibonacchi Series

let p = 0;
let s = 1;
let f = p + s;

for(let i = 1; i<=5; i++){
    f = p + s
    
    p = s;
    s = f;
    //console.log(f)
}

//console.log(f)


function fib(n){
    if(n<=1) return n;

    return fib(n-1) + fib(n-2);
}

console.log(fib(5))


var search = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while(right>=left){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]===target){
            return mid
        }else if(nums[mid]<target){
            left = mid + 1;
        }else{
            right = mid - 1
        }
    }
    
    return -1;
};