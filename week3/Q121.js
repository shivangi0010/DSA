// Remove Digit From Number to Maximize Result

function removeDigit(number,digit){
    let max = ""
    for(let i = 0 ; i < number.length ; i++){
        if(number[i] == digit){
            let result = number.slice(0,i) + number.slice(i+1)
            if(result > max){
            max = result
        }
        }
    }
    return max
}
console.log(removeDigit("1321" ,"1"))