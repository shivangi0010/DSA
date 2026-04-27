// Sum of Unique Elements

function sumUniqueElements(nums){
    let freq = {}
    let sum = 0
    for(let i = 0 ; i < nums.length ; i++){
        freq[nums[i]] = (freq[nums[i]] || 0) + 1
    }
    console.log(freq)
    for(let j in freq){
        if(freq[j] == 1){
            console.log(j)
            sum+=Number(j)
        }
    }
    return sum
}
console.log(sumUniqueElements([1,1,1,1,1]))