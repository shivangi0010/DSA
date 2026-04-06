// Palindromic String using method and Two pointer algorithm (hint: Array reverse algo)

function reverseString(s){
    let start = 0
    let end = s.length -1
    while(start < end){
        if(s[start] !== s[end]){
            return 'this is not palindromic'
        }
        start++
        end--
    }
    return "this is palindromic"
}
console.log(reverseString("hello"))