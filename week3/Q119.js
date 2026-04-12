// Rearrange Characters to Make Target String

var rearrangeCharacters = function(s, target) {

    let freqS = {}
    let freqT = {}

    for(let ch of s){
        if(freqS[ch]){
            freqS[ch]++
        }else{
            freqS[ch] = 1
        }
    }

    for(let ch of target){
        if(freqT[ch]){
            freqT[ch]++
        }else{
            freqT[ch] = 1
        }
    }

    let minCount = Infinity

    for(let ch in freqT){
        if(!freqS[ch]){
            return 0
        }

        let possible = Math.floor(freqS[ch] / freqT[ch])
        minCount = Math.min(minCount, possible)
    }

    return minCount
};

console.log(rearrangeCharacters("ilovecodingonleetcode", "code")) 