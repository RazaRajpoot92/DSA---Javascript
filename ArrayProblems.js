// Leetcode problems


// 27. Remove Element
var removeElement = function(nums, val) {

    let x = 0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] != val){
            nums[x] = nums[i];
            x = x+1;
        }
    }
    
    return x
};

// Reverse String
var reverseString = function(s) {
    sCopy = [...s];
    x = 0;

    for(let i = s.length-1; i>=0; i--){
        s[x] = sCopy[i];
        x = x + 1;
    }

   // console.log(sCopy)
    return s;
};
 let s = ["h","e","l","l","o"]
let resultS = reverseString(s)

//console.log(resultS);



// let t = [1,2,3,4]
// let tt = [...t]

// t[0] = 0;

// console.log(t)
// console.log(tt)


let st = ["H","a","n","n","a","h"]

// let left = 0;
// let right = st.length - 1;
// let swap = null;

// while(left<right){
//     swap = st[left];
//     st[left] = st[right];
//     st[right] = swap;
//     left++;
//     right--
// }


var reverseString = function(s) {
    let left = 0;
    let right = s.length-1;

    while(left<right){
        let temp = s[left];
        s[left] = s[right]
        s[right] = temp;
        left++;
        right--;
    }

    return s;
};

//console.log(reverseString(st))


// Buy and sell slock


let p = [7,1,5,3,6,4]

let min = p[0];
let maxProfit = 0;

for(let i = 1; i<p.length; i++){
    if(p[i]-min > maxProfit){
        maxProfit = p[i]-min;
    }
    if(p[i]<min){
        min = p[i];
    }
}

//console.log(maxProfit)

let n = [2,5,6]
let n2 = [1,2,3]
let nums = []

let m = n.length;
let c = n2.length;

let p1 = 0;
let p2 = 0;

for(let i=0; i<m+c; i++){
   
    if(p2>=c || (n[p1]<n2[p2]&&p1<n.length)){
        nums[i] = n[p1];
        p1++;
    }else{
        nums[i] = n2[p2];
        p2++;
    }

}

console.log(nums)


// Move zero to the end

var moveZeroes = function(nums) {
    let digitIndex = 0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i]!=0){
            nums[digitIndex] = nums[i];
            digitIndex++;
        }
    }

    for(let i = digitIndex; i<nums.length; i++){
        nums[i] = 0;
    }
};


// find the missing number

var missingNumber = function(nums) {
    let n = nums.length;
    let totalSum = n * (n+1) / 2
    let sumOfNums = 0;

    for(let i = 0; i<nums.length; i++){
        sumOfNums += nums[i];
    }

    return totalSum - sumOfNums
};

let xNum = [3,1,5,4,1,5,3]

let xor = 0;
for(let i = 0; i<xNum.length; i++){

    xor = xor ^ xNum[i]
    console.log(xNum)
    console.log(` xNum[i]=${xNum[i]}, Xor = ${xor}`)
}

console.log(xor);



/**
 * @param {number[]} nums
 * @return {number}
 */
 // Boyer Moore algorithm
var majorityElement = function(nums) {
    let count = 1;
    let maj = nums[0]

    for(let i =1; i<nums.length; i++){
        if(count===0){
           maj = nums[i]
           count = 1
        }else if(nums[i] == maj){
            count++
        }else{
            count--
        }
    }

    return maj
};


// BruteForce approach

// var majorityElement = function(nums) {
//     let n = Math.ceil(nums.length/2)
//     let map = {}
//     for(let i = 0; i<nums.length; i++){
//         if(!map[nums[i]]){
//             map[nums[i]] = 1
//         }else{
//             map[nums[i]]++
//         }

//         if(map[nums[i]]>=n){
//             return nums[i]
//         }
//     }
// };


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let n = nums.length;
    if(n<3) return []
    nums.sort((a,b) => a-b)
    let result = []



    for(let i = 0; i<n-2; i++){
        if(i>0 && nums[i] == nums[i-1]){
            continue;
        }

        let n1 = nums[i]
        let target = -n1

        twoSum(nums, target, i+1, n-1, result)

    }

    return result
};

function twoSum(nums, target, i, j, result){
    

    while(i<j){
        if(nums[i]+nums[j] > target){
            j--
        } else if(nums[i]+nums[j] < target){
            i++
        }else{
            while(nums[i]===nums[i+1]) i++;
            while(nums[j]===nums[j-1]) j--;

            result.push([ -target, nums[i], nums[j] ])
            i++;
            j--;
        }
    }
}

//

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let n = nums.length;
    nums.sort((a,b)=> a-b)

    let closest = Infinity

    for(let k = 0; k<=n-3; k++){
        let i = k+1;
        let j = n-1;

        while(i<j){
            let sum = nums[k] + nums[i] + nums[j]

            if(Math.abs(target - sum) < Math.abs(target - closest)){
                closest = sum
            }

            if(sum < target){
                i++
            }else{
                j--
            }
        }
    }

    return closest
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(arr) {
    let l = 0;
    let r = arr.length - 1

    while(l<r){
        let m = Math.floor(l + (r-l)/2)

        if(arr[m]>arr[r]){
            l = m+1
        }else{
            r = m
        }
    }

    return arr[r]
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function(nums) {
//     let l = 0;
//     let r = nums.length - 1

//     while(l<r){
//         while(l<r && nums[l] == nums[l+1]) l++;
//         while(l<r && nums[r] == nums[r-1]) r--;

//         let mid = Math.floor(l + (r - l) /2)

//         if(nums[mid] > nums[r]){
//             l = mid + 1
//         }else{
//             r = mid
//         }
//     }

//     return nums[r]
// };


var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while(l < r){
        let mid = Math.floor(l + (r - l) / 2);

        if(nums[mid] > nums[r]){
            l = mid + 1;
        }
        else if(nums[mid] < nums[r]){
            r = mid;
        }
        else{
            r--;
        }
    }

    return nums[l];
};

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
   let n = A.length
   let map = {}
   let count = 0
   let result = []

   for(let i = 0; i<n; i++){
        if(map[A[i]] == undefined){
            map[A[i]] = 1
        }else{
            map[A[i]]++
        }

        if(map[A[i]] == 2) count++

        if(map[B[i]] == undefined){
            map[B[i]] = 1
        }else{
            map[B[i]]++
        }

        if(map[B[i]] == 2) count++

        result.push(count)
   }
    
    return result
};





// var findThePrefixCommonArray = function(A, B) {
//     let result = []
//     for(let n = 0; n<A.length; n++){
//         let count  = findCommonCount(A,B, n)
    
//         result.push(count)
//     }
    
//     return result
// };

// function findCommonCount(a, b,n){

//     let count = 0
//     for(let i = 0; i<=n; i++){
//         for(let j =0; j<=n; j++){

//             if(a[i] == b[j]){
//                 count++
//             } 

//         }
//     }

//     return count
// }