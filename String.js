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

console.log(map)
console.log(maxVowel)
console.log(maxCons)
