// Accept a space separated sentence and split it into words. Print each word on a new line with the first letter capitalized. (IN- Hello bhai kaise ho, OP- Hello, Bhai, Kaise, Ho)

function sentence(s){
    let arr = s.split(" ")
    for(let i = 0 ; i < arr.length ; i++){
        let first = arr[i][0].toUpperCase()
        let rest = arr[i].slice(1)
        console.log(first + rest)
    }
}
sentence("Hi this is shivangi")