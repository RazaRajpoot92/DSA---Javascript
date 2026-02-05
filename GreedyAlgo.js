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

//

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let n = intervals.length

    let result = []
    let i = 0

    // left
    while(i<n && intervals[i][1] < newInterval[0]){
        result.push(intervals[i])
        i++
    }

    //overlaping
    while(i<n && intervals[i][0] <= newInterval[1]){
        newInterval[0] = Math.min(newInterval[0], intervals[i][0])
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i++
    }
    result.push(newInterval)
    // end intervals
    while(i<n){
        result.push(intervals[i])
        i++
    }
    return result
};