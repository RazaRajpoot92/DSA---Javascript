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

