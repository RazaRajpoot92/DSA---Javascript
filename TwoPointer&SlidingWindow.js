/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  let map = {}

  for(let i = 0; i < nums.length; i++){
        map[nums[i]] = i
  }  
  
  for (let i = 0; i<nums.length; i++){
      let ans = target - nums[i]
      if(map[ans] && map[ans]!==i){
          return [i, map[ans]]
      }
  }
  
};

//


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let p1 = 0
    let p2 = numbers.length - 1;

    for(let i = 0; i<numbers.length; i++){
        if(numbers[p1]+numbers[p2]===target){
            return [++p1, ++p2]
        }else if(numbers[p1]+numbers[p2]>target){
            p2--
        }else{
            p1++
        }
    }
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length==0 && t.length==0) return true
    let i = 0;
    let j = 0;

    while(j<t.length){
        if(s[i]===t[j]){
            i++
            j++
        }else{
            j++
        }

        if(i==s.length) return true
    }

    return false
};