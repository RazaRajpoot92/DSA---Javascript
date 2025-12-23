




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

//console.log(isHappy(n))



//console.log(ans)

let events = [[10,83,53],[63,87,45],[97,100,32],[51,61,16]]
 

let eventCanAttend = []
let maxValue = 0

for(let i = 0; i<events.length; i++){
    if(maxValue<events[i][2]){
        maxValue = events[i][2]
    }
    for(let j =0; j<events.length; j++){
        if(events[i][1]<events[j][0]){
            if(!eventCanAttend.includes(events[i])){
                eventCanAttend.push(events[i])

            }

            if(!eventCanAttend.includes(events[j])){
                eventCanAttend.push(events[j])
            }
            
        }
    }
   
}


for(let i = 0; i<eventCanAttend.length; i++){
   
    for(let j = 0; j<eventCanAttend.length; j++){
        if(j!=i){
            if(eventCanAttend[i][2]+eventCanAttend[j][2]>maxValue){
                maxValue = eventCanAttend[i][2]+eventCanAttend[j][2]
            }
        }
    }
}

console.log(eventCanAttend)
console.log(maxValue)

let t = [2]
console.log(t.includes(2))