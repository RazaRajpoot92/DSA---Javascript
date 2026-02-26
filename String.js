/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
    let temp = 0;
    let resCount = 0

    for(let i = 0; i<s.length; i++){
        if(s[i]=="R"){
            temp++;
        }
        if(s[i]=="L"){
            temp--
        }

        if(temp==0){
            resCount++
        }
    }
    return resCount;
};

// Valid Palidrom

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let rev= "";
    let filteredString = ""

    for(let i = 0; i<s.length; i++){
        if(s[i].match(/[a-z0-9]/i)){
            filteredString += s[i];
            rev = s[i] + rev
        }
    }

    return rev === filteredString
};



/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    for(let i = num.length; i>=0; i--){
        if(parseInt(num[i-1])%2!==0){
            return num.slice(0,i)
        }
    }

    return ""
};


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   let x = 0;
   while(x<strs[0].length){
    let ch = strs[0][x]
    for(let i = 1; i < strs.length; i++){
        if(ch !== strs[i][x] || x ==strs[i].length){
            return strs[0].substring(0,x)
        }
    }
    x++
   }
   return strs[0]
};




let s = "success";
let map = {}


for(let i = 0; i< s.length ; i++){
    if(map[s[i]]){
        map[s[i]]++
        
    }else{
        map[s[i]] = 1;
    }
}

let maxVowel = 0;
let maxCons = 0;
let keys = Object.keys(map)
console.log(Object.keys(map))

for(let i = 0; i<keys.length; i++){
    if('aeiou'.includes(keys[i])){
        if(maxVowel < map[keys[i]]){
            maxVowel = map[keys[i]]
        }
    }else{
        if(maxCons < map[keys[i]]){
            maxCons = map[keys[i]]
        }
    }
    
}

// console.log(map)
// console.log(maxVowel)
// console.log(maxCons)



let string = 'abcde'
let length = string.length
console.log(string.length/2)

for(let i = 0; i<string.length/2; i++){
    
    let temp = string[i]
    string[i]=string[length-i-1]
    string[length-i-1] = temp;
}

console.log(string)

string[2] = "s"

console.log(string)


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    let map = {}
    for(let i = 0; i< s.length; i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }else{
            map[s[i]]++
        }
    }

    for(let i = 0; i< t.length; i++){
        if(!map[t[i]] || map[t[i]]<0){
            return false
        }else{
            map[t[i]]--
        }
    }

    return true;
};



var groupAnagrams = function(strs) {
    let map = {}
    for(let i = 0; i<strs.length; i++){
        let curr = strs[i].split("").sort().join("");

        if(!map[curr]){
            map[curr] = [strs[i]]
        }else{
            map[curr].push(strs[i]);
        }
    }

    return Object.values(map)
};

strs = ["eat","tea","tan","ate","nat","bat"]

let result = groupAnagrams(strs)


console.log(result)

/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
    let operation = 0;
    let carry = 0;

    for(let i = s.length - 1; i>0; i--){
        if(((s[i] - "0") + carry) % 2 == 1 ){
            operation += 2;
            carry = 1
        }else{
            operation++
        }
    }

    return operation + carry;

};



// var numSteps = function (s) {
//     let operation = 0;

//     while (s.length > 1) {

//         if (s[s.length - 1] == "0") {
//             s = pop(s)
//         } else {
//             s = handleOdd(s)
//         }
        
//         operation++
//     }

//     return operation

// };

// function pop(s) {
//     return s.slice(0, s.length - 1)
// }

// function handleOdd(s) {
//     let tempS = s.split("")
//     let i = s.length - 1
//     while (i >= 0) {
//         if (tempS[i] == "1") {
//             tempS[i] = "0"
//         } else {
//             tempS[i] = "1"
//             break;
//         }
//         i--
//     }

//     if (i < 0) {
//         tempS.unshift("1")
//     }

//     return tempS.join("")
// }


// var numSteps = function (s) {
//     let n = BigInt("0b" + s)
//     let count = 0n;

//     while (n !== 1n) {
//         count++
//         if (n % 2n == 0n) {
//             n = n / 2n
//         } else {
//             n = n + 1n
//         }
//     }

//     return Number(count);
// };