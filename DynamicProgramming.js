// Dynamic programming is actually a technique to store result of subprolem so you don't have to calculate it again


/**
 * @param {number} n
 * @return {number}
 */

 let dp = {}

var fib = function(n) {
    if(n<=1){
        return n
    }

    if(!dp[n]){
        dp[n] = fib(n-1) + fib(n-2)
    }

    return dp[n]
};



// var fib = function(n) {
//     if(n<=1) return n;
//     return fib(n-1) + fib(n-2);
// };


// Bottom up => Tabulation | Approach


var fib = function(n) {
    let dp = [0,1]

    for(let i = 2; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
};


// Climbing stairs


/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    
    let dp = [0,1,2]

    for(let i = 3; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
     
};



// let dp = {}
// var climbStairs = function(n) {
    
//     if(n<=2) return n

//     if(!dp[n]){
//         dp[n] = climbStairs(n-1) + climbStairs(n-2)
//     }

//     return dp[n]  
// };



// var climbStairs = function(n) {
    
//     if(n===1||n===2||n===3) return n

//     let a = 1;
//     let b = 2;
//     let c = 0;
//     for(let i = 3; i<=n; i++){
//         c = a + b
//         a = b;
//         b = c
//     }

//     return c
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(val) {

    if(val.length == 1) return val[0]

    let n = val.length;

    //let dp = [val[0], Math.max(val[0],val[1])]

    let a = val[0]
    let b = Math.max(a,val[1])

    for(let i = 2; i<n; i++){
        let temp = b
        b = Math.max(a+val[i], b)
        a = temp
    }

    return b
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(val) {
    
    let n = val.length;
    if(n==1) return val[0]
    if(n==2) return Math.max(val[0],val[1])

    function helperRob(start, end){
        let p1 = val[start]
        let p2 = Math.max(p1, val[start+1])

        for(let i = start+2; i<=end; i++){
            let temp = p2;
            p2 = Math.max(p2, p1 + val[i])
            p1 = temp
        }

        return p2
    }

   return Math.max(helperRob(0, n-2), helperRob(1, n-1))
};