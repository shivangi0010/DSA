// Build Array from Permutation

// 0>=arr[i]<arr.length 

let arr = [0 , 1, 2 , 5 ,3 ,4]
let ans = []
for(let i = 0 ; i< arr.length ;i++){
    ans[i] = arr[arr[i]]
}
console.log(ans)