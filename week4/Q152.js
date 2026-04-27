// Print the unique elements in an array

function uniqueElement(nums){
    let freq = {}
    for(let i = 0 ; i < nums.length ; i++){
        let ch = nums[i]
        if(freq[ch] ){
            freq[ch]++
        }else{
            freq[ch] = 1
        }
    }
    for(let i in freq){
        if(freq[i] == 1){
            console.log(i)
        }
    }
}
console.log(uniqueElement([1,1,2,3,4,4,5,6,6]))