// Subarray with 0 sum

function subarray(nums){
   
    for(let i = 0 ; i < nums.length ; i++){
        let sum = 0
        for(let j = i ; j < nums.length ; j++){
            sum += nums[j]

            if(sum == 0){
                return nums.slice(i, j+1)
            }
        }
    }
}
console.log(subarray([4,2,-3,1,6]))