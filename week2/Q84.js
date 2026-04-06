// Make Array Zero by Subtracting Equal Amounts

let arr = [1 ,5 , 0 ,3 ,5]

arr.sort((a,b)=> a - b)

let count = 0

for(let i = 0 ; i<arr.length ; i++){
    if(arr[i] > 0 && arr[i] !== arr[i - 1]){
        count++
    }
}
console.log(count)