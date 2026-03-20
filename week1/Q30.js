// Print all the factors of a number.

function factor(n){
    let factors = []
    for(let i = 1; i<= n; i++){
        if(n%i == 0){
            factors.push(i)
        }
    }
    console.log("The factors of",n,"are:",factors)
}
factor(12)
