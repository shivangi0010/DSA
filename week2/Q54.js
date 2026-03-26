// Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.
import promptSync from "prompt-sync"

const prompt = promptSync()


let n = Number(prompt("Enter the size of array"))

let sum = 0

for(let i = 1; i<=n ; i++){
    let a = Number(prompt("Enter the element"))
    console.log(a)
   sum+=a
}
console.log("Sum:",sum)
console.log("Average:",sum/n)

