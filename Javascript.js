// write fizzbuzz algo

// if number is divisible by 3 => Fizz
// if number is divisible by 5 => Buzz
// if number is divisible by 3 and 5 => FizzBuzz
// not divisible by 3 or 5 => input
// if not valid number => not a number



function fizzBuzz(n){

    if(typeof n !== 'number' && !Number.isFinite(n)){
        console.log("Not a number")
        return
    }
    let fizz = n%3===0;
    let buzz = n%5===0;

    if(fizz && buzz){
        console.log("fizzbuzz")
    }else if(fizz){
        console.log("fizz")
    } else if(buzz){
        console.log("buzz")
    }else{
        console.log(n)
    }
}

//fizzBuzz(6)

// Exercise #2


// Speed Limit = 70
// 5 -> 1 point
// 12 points -> suspend

function checkSpeed(speed){
    if(speed<=70){
        return "Ok"
    }

    let limit = Math.floor((speed-70)/5)
    
    if(limit==0){
    
        return "Ok"
    }else if(limit<=12){
        return limit == 1? "1 Point": limit + " Points";
    }else{
        return "License Suspended"
    }

    



}

//console.log(checkSpeed(71))

function showNumbers(limit){
    for(let i =0; i<=limit; i++){
        if(i%2==0){
            console.log(i + " Even")
        }else{
            console.log(i + " Odd")
        }
    }
}

showNumbers(5)