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


/// Loops in Javascript


// print hello world 5 times

for(let i = 0; i<5; i++){
   // console.log("Hello World")
}

// print all even numbers from array

let numbers = [2,3,4,5,6,7,80]

for(let i =0; i < numbers.length; i++){
    if(numbers[i]%2==0){
        console.log("Even" + numbers[i])
    }else{
        console.log("Odd - " + numbers[i])
    }

}


/// Find the largest in array

let arrMax = [2,3,455,7,2,9,-1]


function findLargest(arr){
    let largest = -Infinity;
    
    for(let i =0; i< arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }

    return largest;
}

let res = findLargest(arrMax)
console.log(res)


// find the minimum number in array

function findMinimum(arr){
    let smallest = Infinity;

    for(let i = 0; i<arr.length; i++){
        if(arr[i]<smallest){
            smallest = arr[i];
        }
    }

    return smallest;
}

let smRes = findMinimum(arrMax)
console.log(smRes)


//find second largest number from array

function findSecondLargest(arr){
    let largestNum = -Infinity;
    let secondLargestNum = null;

    for(let i = 0; i< arr.length; i++){
        if(arr[i]>largestNum){
            secondLargestNum = largestNum;
            largestNum = arr[i];
        }
    }

    return secondLargestNum;
}


let numArr = [2,3,9,10,11,4,32,]

let secLargestNum = findSecondLargest(numArr)
console.log(secLargestNum);


/// Stars patterns

// 1) star square


let n = 4

for(let i =0; i< n; i++){
    let row = "";
    for(let j = 0; j<n; j++){
        row = row + "* ";
    }
    console.log(row)
}


// star pattern 2

let x = 6

for(let i=0; i<x; i++){
    let row = "";
    for(let j=0; j<=i; j++){
        row = row + "* "
    }

    console.log(row)
}

let m = 5

for(let i = 0; i<m; i++){
    let numb = "";
    for(let j=1; j<=i+1; j++){
        numb = numb + " " + j;
    }

    console.log(numb)
}



for(let i = 0; i<m; i++){
    let numb = "";
    for(let j=0; j<=i; j++){
        numb = numb + " " + (i+1);
    }

    console.log(numb)
}






let s = 5

for(let i = 1; i<=s; i++){
    let row = "";
    for(let j=s; j>=1; j--){
        if(j>i){
            row = row + " ";
        }else{
            row = row + "*";
        }
    }
    console.log(row)
}


let f = 8

for(let i = 0; i<f; i++){
    let row = "";
    let n = true
    for(let j=0; j<=i; j++){
        if(n){
         row = row + 1;
        }else{
            row = row + 0
        }

        n = !n
    }

    console.log(row)
}




