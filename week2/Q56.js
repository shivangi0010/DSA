// Find the greatest element (Ex: {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index)

let arr = [2, 96 , 69 , 77, 145 , 200]
let max = arr[0]
index = 0
for(let i = 1 ; i< arr.length ; i++){
    if(arr[i] > max){
        max = arr[i]
        index = i
    }
}
console.log("greatest element is :", max,"found at index",index)  

