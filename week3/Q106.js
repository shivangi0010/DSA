// Take an array of strings words and a String Prefix. Print the number of strings in words that contain pref as a prefix. (Example - Input: words = [\pay\"

function prefixString( s , pref){
    let count = 0
    for(let i = 0 ; i < s.length ; i++){
        if(s[i].startsWith(pref)){
            count++
        }
    }
    console.log(count , "strings starts with prefix :" , pref)
}
prefixString(["word" , "shivangi" , "shantanu" , "alkama"] , "sh")