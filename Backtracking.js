/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = []

    function backtrack(path, start){
        result.push([...path])
        for(let i = start; i<nums.length; i++){
            path.push(nums[i])
            backtrack(path, i+1)
            path.pop()
        }

    }
    backtrack([],0)
    
    return result;
};


// Combination

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let result = []

  function backtrack(path, start){

    if(path.length == k){
        result.push([...path])
        return;
    }

    for(let i = start; i<=n; i++){
        path.push(i)
        backtrack(path, i+1)
        path.pop()
    }

  } 
  backtrack([],1) 

  return result;
};