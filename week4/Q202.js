// Subarray Sum Equals K - BQ (Ex: 3,9,-2,4,1,-7,2,6,-5,8,-3,-7,6,2,1 k =5)


function subarray(nums , k){

    let count = 0
   
    for(let i = 0 ; i < nums.length ; i++){
        let sum = 0
        for(let j = i ; j < nums.length ; j++){
            sum += nums[j]

            if(sum == k){
                count++
            }
        }
    }
    return count
}
console.log(subarray([1,2,3], 3))