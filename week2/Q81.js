// Keep Multiplying Found Values by Two

let arr = [5 , 3 , 6 ,12 ,1 , 24]

let original = 4
let found = true
while(found){
    found = false
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i] == original){
            original *= 2
            found = true
            break
        }
    }
}
console.log(original)