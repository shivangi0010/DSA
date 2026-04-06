// min max game 

function minMax(nums){
    while(nums.length > 1){
        let newArray = []
        for(let i = 0 ; i < nums.length/2 ; i++){
            if(i%2 == 0){
                newArray[i] = Math.min(nums[2*i] , nums[2*i + 1])
            }else{
                newArray[i] = Math.max(nums[2*i] , nums[2*i +1])
            }
        }
        nums = newArray
    }
    return nums[0]
}
console.log(minMax([3]))