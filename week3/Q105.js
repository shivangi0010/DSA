// Toggle each alphabet of String (In - AcgDfD Output - aCGdFd)

function toggleChar(s){
    let r = ""
    for(let i = 0 ; i<s.length ; i++){
        if(s[i] === s[i].toUpperCase()){
            r += s[i].toLowerCase()
        }else{
            r += s[i].toUpperCase()
        }
    }
    console.log("Original string:" , s)
    console.log("After Toggle:" , r)
}
toggleChar("hElLo")