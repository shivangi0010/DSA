// Print the sum of all even & odd numbers in a range separately.

function sumEvenOdd(n){
    let sum = 0;
    let add = 0;
    for(let i = 1; i<= n ; i++){
        if(i%2 == 0){
            sum+=i
        }else if(i%2 != 0){
            add+=i
        }
    }
     console.log("The sum of all even Numbers in the range of 1 to",n,"is:",sum)
     console.log("The sum of all odd numbers in the range of 1 to",n , "is:",add)


}
sumEvenOdd(10)