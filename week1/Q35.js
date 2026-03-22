// Sum of digits of a number (Ex: 936 = 18)

function digitSum(n){
    let sum = 0
    for(;n>0 ; n= Math.floor(n/10)){
        let rem = n%10
        sum+=rem
    }
    console.log("The sum of all the digits is:",sum)
}
digitSum(12)
