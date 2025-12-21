




//console.log(3%10)
let n = 7
let seenNums = new Set()

function isHappy(n){

    if(n==1) return true;

    let ans = null;

    while(n!=0){
        if(n<10){
        ans += n * n    
        }else{
            let digit = n%10
            ans += digit * digit
            n = Math.floor(n/10)
        }
       
    }
    if(seenNums.has(ans)) return false
    seenNums.add(ans)
  //  console.log(ans)
    return isHappy(ans)
}

console.log(isHappy(n))



//console.log(ans)