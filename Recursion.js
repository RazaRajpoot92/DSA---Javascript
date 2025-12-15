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

// sum of all numbers in array

let nums = [1,2,4]



