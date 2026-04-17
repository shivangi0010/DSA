// Squares of a Sorted Array

function sortedSquares(nums) {
    let result = nums.map(x => x * x);  
    return result.sort((a, b) => a - b); 
}
console.log(sortedSquares([-4,-1,0,3,10]))