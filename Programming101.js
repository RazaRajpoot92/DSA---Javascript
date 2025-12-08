// Variables

let name = "Ahmad" // string
let age = 25 // numbers

console.log(`${name} is ${age} years old.`)


// Arrays

let arr = ["Ahmad", 25, "Raza"] // Can be mix match of different data types
console.log(arr);

// Objects

let obj = {
    name: "Ahmad",
    age: 25,
    student: true,
}

console.log(obj.name)



// write a program which accepts age and tells whether the user is eligible for vote or not


function eligibleToVote(age){

    if(age < 0){
        console.log("Please Enter valid age")
    }
    else if(age < 18){
        console.log("You are not eligible for vote")
    }else{
        console.log("You are  eligible for vote")
    }
}


eligibleToVote(-1)