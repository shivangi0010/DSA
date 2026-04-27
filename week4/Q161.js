// distribute candies 


function distributeCandies(nums){
    let canEat = nums.length/2
    let uniqueElements = new Set(nums).size

    let result = Math.min(canEat , uniqueElements)
    return result
}
console.log(distributeCandies([1,1,1,1]))