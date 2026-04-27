// Find the frequency of elements in an integer array

function frequency(nums){
    let freq = {}
    for(let i = 0 ; i < nums.length ; i++){
        let ch = nums[i]
        if(freq[ch]){
            freq[ch]++
        }else{
            freq[ch] = 1
        }
    }
    return freq
}
console.log(frequency([1,1,2,3,3,4,4,5,6,7]))