// Check if the number is Prime or not.

function primeNumber(n){
    let num = Math.floor(Math.sqrt(n))
    if(n<=1){
        return "This is not a prime Number"
    }
    for(let i = 2; i <= num ; i++){
        if(n % i == 0){
            return "this is not a prime number."
        }
    }
     return "Prime Number"

}
console.log(primeNumber(1))