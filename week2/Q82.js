// Smallest Index With Equal Value

function smallestIndex(nums){
    let index = -1
    for(let i = 0 ; i < nums.length ; i++){
        if(i%10 == nums[i]){
            return i
        }
    }
    return index
}
console.log(smallestIndex([4,3,2,1]))