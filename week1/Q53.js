// x pattern 

function xpattern(n){
    for(let i = 1 ; i<=n ; i++){
        if(i===n){
            console.log(" ".repeat(n-1)+ "*")
        }else{
            console.log(" ".repeat(i-1)+"*" + " ".repeat(2*(n-i)-1)+ "*")
            for(let j = 1 ; j<= i ; j++){
                console.log(" ".repeat(n-2) + "*" + " ".repeat(2*i - 1)+ "*")
            }
        }
    }
}
xpattern(5)