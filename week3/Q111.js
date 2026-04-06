// Check Two Strings are Anagram or Not (Anagrams words have the same word length & same character count. Examples of anagram words are arc and car, state and taste, night and thing etc.)


function anagram(s1 , s2){
    let flag = true
    if(s1.length == s2.length){
        for(let i = 0; i < s2.length ; i++){
            if(s1.includes(s2[i])){
                flag = true
            }
        }
        console.log("anagram")
    }else{
    console.log("not anagram")
    }
}
anagram("car","arc")