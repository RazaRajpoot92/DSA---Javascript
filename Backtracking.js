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

// Permutation

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let n = nums.length;
    let result = []

    function backTrack(path){
        if(path.length === n){
            result.push([...path])
            return
        }

        for(let i = 0; i<nums.length; i++){
         
            if(!path.includes(nums[i])){
                path.push(nums[i])
                backTrack(path)
                path.pop()
            }
           
            
        }
    }
    backTrack([])

    return result;
};

//

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = []
    nums.sort((a,b)=>a-b)

    function backtrack(path, start){

        result.push([...path])

        for(let i  = start; i<nums.length; i++){
            if( i > start && nums[i-1]===nums[i]) continue;

            path.push(nums[i])
            backtrack(path, i+1)
            path.pop()
        }
    }
    backtrack([],0)

    return result;
};


//

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(arr, target) {
    let result = []
    
    function backtrack(remainingSum, path, start){

        if(remainingSum === 0) result.push([...path])

        if(remainingSum <= 0 ) return;

        for(let i = start; i < arr.length; i++ ){
            path.push(arr[i])
            backtrack(remainingSum - arr[i], path, i)
            path.pop()

        }
    }

    backtrack(target, [], 0)

    return result;
};