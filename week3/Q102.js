// Check if the string is Palindromic or not

function palindromicString(s){
    let r = ""
    for(let i = s.length - 1 ; i>=0 ;i--){
       r += s[i]
    }
    if(r == s){
        console.log("this string is palindromic")
    }else{
        console.log("this string is not palindromic")
    }
}
palindromicString("lol")