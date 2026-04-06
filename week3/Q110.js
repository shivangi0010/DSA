// Accept a string and print the frequency of each character present in the string

function frequency(s){
    let freq = {}
    for(let i = 0 ; i < s.length ; i++){
        let ch = s[i]
        if(freq[ch]){
            freq[ch]++
        }else{
            freq[ch] = 1
        }
    }
    console.log(freq)
}
frequency("hello")