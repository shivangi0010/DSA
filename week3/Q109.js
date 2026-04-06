// Maximum Number of Words Found in Sentences

function maxWords(s){
    let arr = s.split(" ")
    let count = 0
    for(let i = 0 ; i < arr.length ; i++){
        count++
    }
    console.log(count , "words are there in this sentence.")
}
maxWords("Hi this is shivangu")