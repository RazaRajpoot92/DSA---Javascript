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