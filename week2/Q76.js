// Sort First half in Ascending and Second half in descending order in an array


let arr = [1 ,2 , 10 , 3 , 4 , 9 , 5 , 6]

let mid = Math.floor(arr.length / 2)

if(arr.length%2 !== 0){
    console.log("The array should be of even size.")
    return
}
let swapped = true
while(swapped){
    swapped = false
    let i = 0
    while(i < mid - 1){
        if(arr[i] > arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped = true
        }
        i++
    }
}

swapped = true
while(swapped){
    swapped = false
    let i = mid
    while(i < arr.length){
        if(arr[i] < arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped = true
        }
        i++
    }
}

console.log(arr)