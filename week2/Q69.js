// Concatenation of array

let arr1 = [10, 20 , 22, 23]
let arr2 = [30, 40]

let arr3 = [...arr1]

for(let i = 0 ; i< arr2.length ; i++){
    arr3.push(arr2[i])
} 
console.log(arr3)