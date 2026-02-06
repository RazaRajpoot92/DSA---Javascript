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

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {

    let result = []
    let start = Array(26).fill(-1)
    let end = Array(26).fill(-1)

    for(let i = 0; i< s.length; i++){
        let curr = s.charCodeAt(i) - 97
        
        if(start[curr] == -1){
            start[curr] = i
        }
        
        end[curr] = i
        
    }
    
    let partitionStart = partitionEnd = 0;
    
    for(let i = 0; i<s.length; i++){
        let curr = s.charCodeAt(i) - 97
        
        if(partitionEnd < start[curr]){
            result.push(partitionEnd - partitionStart + 1)
            partitionStart = partitionEnd = i
        }
        
        partitionEnd = Math.max(partitionEnd, end[curr])
    }
    
    if(partitionEnd - partitionStart + 1 > 0){
        result.push(partitionEnd - partitionStart + 1)
    }

    return result
};



// approach 1
// var partitionLabels = function (s) {

//     let i = 0;
//     let j = 1;
//     let result = []
//     let end = 0
//     while (i < s.length) {

//         if (s[i] == s[j]) {
//             end = j
//         }

//         j++
//         if (j > s.length - 1) {
//             result.push([i, end])
//             i++
//             j = 0
//         }
//     }

//     let ans = [result[0]]

//     for (let i = 1; i < result.length; i++) {
//         if (result[i][0] <= ans[ans.length - 1][1]) {
//             ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], result[i][1])
//         } else {
//             ans.push(result[i])
//         }
//     }


//     let final = []

//     for (let i = 0; i < ans.length; i++) {
//         final.push((ans[i][1] - ans[i][0]) + 1)
//     }

//     return final
// };