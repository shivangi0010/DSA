// Make a choice based calculator using do while

function calculator(method, a, b){
    switch(method){
        case "+" :
            console.log(a + b)
            break
        case "-" :
            console.log(a-b)
            break
        case "*" :
            console.log(a * b)
            break
        case "/" :
            console.log(a / b)
            break
        case "%" :
            console.log(a % b)
            break
        default:
            console.log("Wrong Method!")
    }
}
calculator("%" , 10 , 4)