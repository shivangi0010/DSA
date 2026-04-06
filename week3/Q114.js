// Percentage of letter in a string 

function percentage(s){
    let freq = {}
    let percent = {}
    for(let i = 0 ; i < s.length ; i++){
        let ch = s[i]
        if(freq[ch]){
            freq[ch]++
        }else{
            freq[ch] = 1
        }
         percent[ch] = Math.floor((freq[ch]/s.length)*100)+ "%"
    }
    console.log(percent)
}
percentage("hello")