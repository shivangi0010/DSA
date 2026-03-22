// Print the sum of all factors of a number (Ex: 50 -> 1 + 2 + 5 + 10 + 25 = 43)

function factorSum(n){
    let sum = 0
    for(let i = 1; i<=n ; i++){
        if(n%i == 0){
            sum+=i
        }
    }
    console.log("The sum of factors of", n , "is:", sum)
}
factorSum(50)
