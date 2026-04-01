// Find sum of minimum absolute difference of the given array

let arr = [2, 5, 6, 1 ,13, 12, 90, 65]

arr.sort((a ,b)=>a - b)

let sum = 0

for(let i = 0 ; i < arr.length-1 ; i++){
    sum += Math.abs(arr[i+1] - arr[i])
}
console.log(sum)