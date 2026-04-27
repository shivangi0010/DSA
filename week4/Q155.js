// check if the sentence is pangram 

function isPangram(s){
    let set = new Set()
    for(let char of s.toLowerCase()){
        if(char >= "a" && char<= "z"){
            set.add(char)
        }
    }
    if(set.size == 26){
        console.log("The sentence is pangram")
    }else{
        console.log("the sentence is not pangram")
    }
}
isPangram("abcdefghijjkklmnoopqrstuvwxyz")