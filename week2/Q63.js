// Binary Search. If element found print the index, else -1

let arr = [10, 20, 30, 40, 50, 60]
let key = 50
let start = 0
let end = arr.length - 1
let found = false

while(start<=end){
    let mid = Math.floor((start+end)/2)

    if(arr[mid] == key){
        found = true
        console.log("Element",key, "found at index:",mid)
        break
    }else if(arr[mid]<key){
        start = mid+1
    }else{
        end = mid-1
    }
}

if(!found){
    console.log("-1")
}