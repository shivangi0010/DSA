// Accept an English alphabet from user and check if it is a consonant or a vowel.

function vowel(letter){
    if(letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u"){
        console.log(letter,"is vowel.")
    }else{
        console.log(letter,"is consonant.")
    }
}
vowel("t")