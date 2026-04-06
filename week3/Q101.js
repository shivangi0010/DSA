// Accept a string and print it in reverse order

function reverseString(s){
    for(let i = s.length -1 ; i >= 0 ; i--){
        console.log(s.charAt(i))
    }
}
reverseString("hello")