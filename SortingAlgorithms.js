// Bubble sort


// Iteration (outloop)=> n-1
// Swapping (inner loop) => n-1-i


let nums = [3,4,5,1,6]

let n = nums.length;

for(let i=0; i<n-1; i++){
    let isSwapped = false;

    for(let j = 0; j<n-1-i; j++){
        if(nums[j]>nums[j+1]){
            let temp = nums[j];
            nums[j]=nums[j+1];
            nums[j+1] = temp;
            isSwapped = true;
           console.log(nums)
        }
    }
    if(!isSwapped) break;

}

console.log(nums)