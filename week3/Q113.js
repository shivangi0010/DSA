// count asterisks 

function countAsteriks(s){
    let count = 0
    let insidePipe = false
    for(let i = 0 ; i<s.length ; i++){
        if(s[i] == "|"){
          insidePipe = !insidePipe
        }else if(s[i] == "*" && !insidePipe){
            count++
        }
    }
    console.log(count)
}
countAsteriks("l|se*gh|**hy|uij*|*")