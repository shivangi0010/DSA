// Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)

function digit(n){
    for(;n>0 ; n = Math.floor(n/10)){ //for(initialization;condition;update)
        let rem = n%10
        console.log(rem)
    }
}
digit(84872873)