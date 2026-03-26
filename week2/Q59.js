// Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.


import PromptSync from "prompt-sync";

const prompt = PromptSync()

let n = Number(prompt("Enter size of the array: "))
let arr = []
for(let i = 0 ; i<n ; i++){
    let element = Number(prompt("Enter the element: "))
    arr.push(element)
}
let arr2 = []
for(let j = arr.length-1 ; j>=0 ;j--){
    arr2.push(arr[j])
}
console.log("Original:",arr)
console.log("Reversed: ",arr2)