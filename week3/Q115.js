// Check if All A's Appears Before All B's

function checkString(s){
    let seenB = false
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] == "b"){
            seenB = true
        }else if(s[i] == "a" && seenB){
            return false
        }
    }
    return true
}
console.log(checkString("bbb"))
