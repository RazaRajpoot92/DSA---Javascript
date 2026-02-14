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

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let n = coins.length;
    let dp = {}

    let fn = (remainingAmount)=>{

        if(remainingAmount === 0) return 0
        if(remainingAmount < 0) return -1

        if(remainingAmount in dp){
            return dp[remainingAmount]
        }

        let minCoins = Infinity
        for(let i = 0; i<n; i++){
            let res = fn(remainingAmount - coins[i])
            if(res != -1){
                minCoins = Math.min(1 + res, minCoins)
            }

        }
        dp[remainingAmount] = minCoins === Infinity ? -1 : minCoins
        return dp[remainingAmount]
    }

    return fn(amount)
};

// tabulation approach


var coinChange = function(coins, amount) {
    let n = coins.length;
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for(let i = 1; i<=amount; i++){
        for(let j = 0; j<n; j++){
            let remaingAmount = i - coins[j]
            if(remaingAmount >= 0){
                dp[i] = Math.min(dp[i], 1 + dp[remaingAmount])
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
};


/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let n = s.length
    let dp = Array.from({ length: n }, () => Array(n).fill(null))
    let ans = 0
    for (let i = 0; i < n; i++) {
        dp[i][i] = true
        ans++
        if (i < n - 1 && s[i] === s[i + 1]) {
            dp[i][i + 1] = true
            ans++
        }
    }

    //
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1

            if (s[i] == s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true
                ans++
            }
        }
    }

    return ans
};

//

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let dp = {}

    function fn(remS) {

        if (remS === "") return 1
        if (remS == "0") return 0

       // if(dp[remS]) return dp[remS]
       // if(remS in dp) return dp[remS]
        if(dp[remS] !== undefined) return dp[remS]

        let n = remS.length
        let ans = 0
        let oneDigit = remS.substring(n - 1)
        let twoDigit = remS.substring(n - 2)

        if(oneDigit != 0){
            ans+= fn(remS.substring(0, n - 1))
        }

        if(twoDigit >= 10 && twoDigit <= 26){
            ans+= fn(remS.substring(0, n - 2))
        }

        dp[remS] = ans

        return ans
    }

    return fn(s)
};


//


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(arr) {
    let n = arr.length;
    let maxProdSoFar = arr[0];
    let miniProdSoFar = arr[0];
    let totalProd = arr[0];

    for(let i = 1; i < n; i++){
        let maxProdCopy = maxProdSoFar;

        maxProdSoFar = Math.max(arr[i], maxProdSoFar * arr[i], miniProdSoFar * arr[i]);
        miniProdSoFar = Math.min(arr[i], maxProdCopy * arr[i], miniProdSoFar * arr[i]);

        totalProd = Math.max(totalProd, maxProdSoFar);
    }
    
    return totalProd;
};


var maxProduct = function(arr) {
    let n = arr.length;
    let ltr = rtl = 1
    let totalMaxProd = -Infinity

    for(let i = 0; i< n; i++){
        ltr = ltr * arr[i]
        rtl = rtl * arr[n-i-1]
        totalMaxProd = Math.max(ltr,rtl, totalMaxProd)
        if(ltr == 0) ltr = 1
        if(rtl == 0) rtl = 1
    }

    return totalMaxProd
};