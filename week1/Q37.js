// Accept a number and check if it is a palindromic number (If number and its reverse are equal, Ex: 12321 - Reverse - 12321)


function palindrome(n){
    let num = n
    let reverse = 0
    for(; n>0 ; n=Math.floor(n/10)){
        let rem = n%10
        reverse  = reverse * 10 + rem
    }
    if(num == reverse){
        console.log(num,"is a palindromic number.")
    }else{
        console.log(num,"is not a palindromic number.")
    }
}
palindrome(12321)