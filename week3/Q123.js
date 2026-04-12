// Find Resultant Array After Removing Anagrams

var removeAnagrams = function(words) {

    let result = []

    for(let i = 0; i < words.length; i++){

        let curr = words[i].split('').sort().join('')

        if(result.length === 0){
            result.push(words[i])
        }else{
            let prev = result[result.length - 1].split('').sort().join('')

            if(curr !== prev){
                result.push(words[i])
            }
        }
    }

    return result
};

console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]))
