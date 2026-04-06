// Count vowels and consonants in a string

function vowels(s){
    let countVowels = 0
    let countConsonants = 0
    for(let i = 0 ; i< s.length ; i++){
        if(s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u"){
            countVowels++
        }else{
            countConsonants++
        }
    }
    console.log(countVowels, ": Vowels")
    console.log(countConsonants , ": Consonants")
}
vowels("hello")