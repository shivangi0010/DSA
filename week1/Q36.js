// Accept a number and print its reverse

function reverseNumber(n){
    let reverse = 0
    let num = n
    for(; n>0 ; n=Math.floor(n/10)){
        let rem = n%10
        reverse = reverse*10 +rem
    }
    console.log("The reverse of the number",num, "is:",reverse)
}
reverseNumber(123)