// Accept a number and check if it is a strong number or not (Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)

function strongNumber(n){
    let original = n
    let sum = 0
    for(; n> 0 ; n=Math.floor(n/10)){
        let rem = n%10
        let fact = 1
        for(let i = 1 ; i<= rem ; i++){
            fact*=i
        }
        sum+=fact
    }
    if(original == sum){
        console.log(original,"is a strong number.")
    }else{
        console.log(original,"is not a strong number.")
    }
}
strongNumber(145)