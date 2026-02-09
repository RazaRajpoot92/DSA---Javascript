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
