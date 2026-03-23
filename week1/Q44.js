// Project - Guess Game

let random = Math.floor(Math.random()*100) + 1
console.log(random)

function guessGame(num){
    let original = num
    if(original<random){
        console.log("Too Low")
    }else if(original>random){
        console.log("Too High")
    }else if(original == random){
        console.log("Correct")
    }else{
        console.log("invalid")
    }
}
guessGame(33)
guessGame(12)
guessGame(2)
guessGame(45)