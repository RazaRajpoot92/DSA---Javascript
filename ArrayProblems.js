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

console.log(reverseString(st))