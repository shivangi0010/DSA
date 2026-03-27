// Special number using methods.

function specialNmuber(n){
    let original = n
    let sum = 0
    let product = 1
    for(; n>0 ; n=Math.floor(n/10)){
        let rem = n%10
        sum+=rem
        product*=rem
    }
    let result = sum + product
    if(result == original){
        console.log(original, "is a special number")
    }else{
        console.log(original, "is not a special number")
    }
}
specialNmuber(59)