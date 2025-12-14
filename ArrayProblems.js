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