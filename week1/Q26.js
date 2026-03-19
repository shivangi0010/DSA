// Take a number as input and print its table (Ex: 5 * 1 = 5 ... up to 10 terms)

function table(n){
    for(let i = 1 ; i<11 ; i++){
        console.log(n,"*",i,"=",n*i)
    }
}
table(5)