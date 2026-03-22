// Automorphic number (Ex: 5 = 25 = 625 = 390625, 6=36, 76 = 5776)

function automorphic(n){
    let original = n
    let square = Math.pow(n,2)
    let a = original.toString()
    let b = Math.pow(10, a.length)
    let rem = square % b
    if(original == rem){
        console.log(original, "is an automorphic number.")
    }else{
        console.log(original,"is not an automorphic number.")
    }
}
automorphic(23)