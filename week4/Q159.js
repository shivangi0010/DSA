// Most Frequent Even Element

function mostFRequent(nums){
    let freq = {}
    let maxFreq = 0
    let result = -1
    for(let i = 0 ; i < nums.length ; i++){
        let ch = nums[i]
        if(ch % 2 == 0){
           freq[ch] = (freq[ch] || 0) + 1
        }
    }
    for(let i in freq){
         let num = Number(i);

        if (
            freq[i] > maxFreq ||
            (freq[i] === maxFreq && num < result)
        ) {
            maxFreq = freq[i];
            result = num;
        }
    }
    return result
}
console.log(mostFRequent([0,1,2,2,3,4,4,5]))