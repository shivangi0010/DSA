// Extend the previous question and capitalize the first & last character of each word in the sentence and print the new sentence (Ex - Hello bhai Kaise ho a, Output - HellO BhaI KaisE HO A)


function sentence(s){
    let arr = s.split(" ")
    for(let i = 0 ; i < arr.length ; i++){
        let first = arr[i][0].toUpperCase()
        let middle = arr[i].slice(1 , arr[i].length - 1)
        let last  = arr[i][arr[i].length - 1].toUpperCase()
        console.log(first + middle + last)
    }
}
sentence("Hi this is shivangi")