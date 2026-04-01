// Given an array of even size, task is to find minimum value that can be added to an element so that the array becomes balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of the right half. (Ex: Input : 1 2 1 2 1 3, Output : 2)


let arr = [1, 2, 1, 4 , 1, 2 ,1,3]

let mid = Math.floor(arr.length/2)

let sumLeft = 0
let sumRight = 0
let diff = 0
if(arr.length % 2 !== 0){
    console.log("the array should be of even size.")
    return
}

for(let i = 0 ; i<mid ; i++){
    sumLeft += arr[i]
}
for(let j = mid  ; j < arr.length ; j++){
    sumRight += arr[j]
}
console.log("Sum of left:",sumLeft,"Sum of Right:",sumRight,"before balancing.")
diff = Math.abs(sumLeft - sumRight)
if(diff == 0){
   console.log("The array is already balanced.")
}else if(sumLeft < sumRight){
    sumLeft += diff
    console.log("Minimum value =",diff)
    console.log("Sum of left:",sumLeft,"Sum of Right:",sumRight,"after balancing.")
}else if(sumLeft > sumRight){
    sumRight += diff
    console.log("Minimum value =",diff)
    console.log("Sum of left:",sumLeft,"Sum of Right:",sumRight,"after balancing.")
}