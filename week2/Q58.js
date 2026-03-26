// Check if array is sorted in increasing order or not. (Ex 1 - { 1, 5, 8, 9, 10, 15 } - OP = \YES\"

let arr = [1, 5 ,8 ,9 ,10 ,15]

let isIncreasing = true

for(let i = 0 ; i<arr.length-1 ; i++){
    if(arr[i] >= arr[i+1]){
        isIncreasing = false
        break
    }
}
if(!isIncreasing){
    console.log("no, the array is not in increasing order")
}else{
    console.log("the array is in increasing order")
}