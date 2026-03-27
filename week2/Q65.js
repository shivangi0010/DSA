// Move all the negative elements on the left side and positive elements on the right side O(n).

let arr = [-1 , 0, 2, -2 ,3, 16 , -18]

let start = 0
let end = arr.length - 1

while(start < end){
    if(arr[start] < 0){
        start++
    }else if(arr[end] >= 0){
       end--
    }else{
       let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }       
}
console.log(arr)