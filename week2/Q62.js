// Linear Search an array - If element found print the index, else -1

let arr = [10, 20 ,30, 40, 50]
let key = 30
let found = false
for(let i = 0 ; i< arr.length; i++){
    if(arr[i] == key){
         console.log("Element",key,"found at index:",i)
         found = true
         break 
    }
}
if(!found){
console.log("-1")
}
