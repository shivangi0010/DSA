// v pattern 

function vPattern(n){
    for(let i = 1 ; i<= n ; i++){
        if(i===n){
            console.log(" ".repeat(n-1)+"*")
        }else{
           console.log(" ".repeat(i-1) + "*" + " ".repeat(2*(n-i) - 1) + "*")  
        }
    }
}
vPattern(5)