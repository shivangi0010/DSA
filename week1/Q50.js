// Mirrored Right Triangle Pattern

function mirroredTriangle(n){
    for(let i = 1 ; i <= n ; i++){
        console.log(" ".repeat(n-i) + "*".repeat(i))
    }
}
mirroredTriangle(5)