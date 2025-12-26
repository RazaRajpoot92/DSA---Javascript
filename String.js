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