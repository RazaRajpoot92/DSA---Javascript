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
    console.log(n);
    n = n-1;
    print(n)
}

// sum of all n numbers 

function sumOfn(n){
    if(n===0) return 0;
    return n + sumOfn(n-1)
}

console.log(sumOfn(15))

// find the n is power of 2

function powerOfTwo(n){
    console.log(n)
    if(n==1) {
        console.log("work?")
        return true;
    }

    if(n<1) return false;

    
   return powerOfTwo(n/2)
}
let n = 4
console.log(powerOfTwo(n))


