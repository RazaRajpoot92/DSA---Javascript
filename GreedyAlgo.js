/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a,b)=> (b[1]-b[0]) - (a[1]-a[0]) )

    let n = costs.length/2

    let ans = 0
    for(let i = 0; i<n; i++){

        ans += costs[i][0]

        ans += costs[n+i][1]
    }

    return ans;
};

//

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)

    let i = 0
    let j = 0
   
    while(i<g.length && j<s.length){
        
        if(g[i]<=s[j]){

            i++
        }
        
        j++
    }

    return i;
};